import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { getCurrentUser, requireAdmin } from "./helpers";

// Service pricing map
const SERVICE_PRICES: Record<string, number> = {
  sofa: 999,
  recliner: 1499,
  bed: 1199,
  chair: 599,
  polish: 799,
};

function generateBookingNumber(): string {
  const prefix = "FR";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export const getEstimatedPrice = query({
  args: {
    service: v.union(
      v.literal("sofa"),
      v.literal("recliner"),
      v.literal("bed"),
      v.literal("chair"),
      v.literal("polish")
    ),
  },
  handler: async (_ctx, args) => {
    return SERVICE_PRICES[args.service] ?? 0;
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const create = mutation({
  args: {
    service: v.union(
      v.literal("sofa"),
      v.literal("recliner"),
      v.literal("bed"),
      v.literal("chair"),
      v.literal("polish")
    ),
    description: v.string(),
    imageStorageIds: v.array(v.id("_storage")),
    date: v.string(),
    timeSlot: v.string(),
    address: v.string(),
    landmark: v.optional(v.string()),
    phone: v.string(),
    customerName: v.string(),
    customerEmail: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Optionally link to a logged-in user if available
    const identity = await ctx.auth.getUserIdentity();
    let userId: Parameters<typeof ctx.db.insert<"bookings">>[1]["userId"];
    if (identity) {
      const user = await ctx.db
        .query("users")
        .withIndex("by_token", (q) =>
          q.eq("tokenIdentifier", identity.tokenIdentifier)
        )
        .unique();
      userId = user?._id;
    }

    const bookingNumber = generateBookingNumber();
    const estimatedPrice = SERVICE_PRICES[args.service] ?? 0;

    const bookingId = await ctx.db.insert("bookings", {
      userId,
      bookingNumber,
      service: args.service,
      description: args.description,
      imageStorageIds: args.imageStorageIds,
      date: args.date,
      timeSlot: args.timeSlot,
      address: args.address,
      landmark: args.landmark,
      phone: args.phone,
      customerName: args.customerName,
      customerEmail: args.customerEmail ?? "",
      status: "pending",
      estimatedPrice,
    });

    // Send confirmation email async
    if (args.customerEmail) {
      await ctx.scheduler.runAfter(
        0,
        internal.emails.sendBookingConfirmation,
        {
          to: args.customerEmail,
          customerName: args.customerName,
          bookingNumber,
          service: args.service,
          date: args.date,
          timeSlot: args.timeSlot,
          estimatedPrice,
        }
      );
    }

    // Notify admin with all booking details
    await ctx.scheduler.runAfter(0, internal.emails.sendAdminNotification, {
      bookingNumber,
      customerName: args.customerName,
      customerEmail: args.customerEmail ?? "",
      service: args.service,
      date: args.date,
      timeSlot: args.timeSlot,
      phone: args.phone,
      address: args.address,
      landmark: args.landmark,
      description: args.description,
      estimatedPrice,
    });

    return { bookingId, bookingNumber };
  },
});

export const getMyBookings = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx);
    const bookings = await ctx.db
      .query("bookings")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();

    // Attach image URLs
    return await Promise.all(
      bookings.map(async (booking) => {
        const imageUrls = await Promise.all(
          booking.imageStorageIds.map((id) => ctx.storage.getUrl(id))
        );
        return { ...booking, imageUrls: imageUrls.filter(Boolean) as string[] };
      })
    );
  },
});

export const getByBookingNumber = query({
  args: { bookingNumber: v.string() },
  handler: async (ctx, args) => {
    const booking = await ctx.db
      .query("bookings")
      .withIndex("by_booking_number", (q) =>
        q.eq("bookingNumber", args.bookingNumber)
      )
      .unique();
    return booking;
  },
});

// Admin queries
export const getAllBookings = query({
  args: {
    statusFilter: v.optional(
      v.union(
        v.literal("pending"),
        v.literal("confirmed"),
        v.literal("completed"),
        v.literal("cancelled")
      )
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    let bookings;
    if (args.statusFilter) {
      bookings = await ctx.db
        .query("bookings")
        .withIndex("by_status", (q) => q.eq("status", args.statusFilter!))
        .order("desc")
        .collect();
    } else {
      bookings = await ctx.db.query("bookings").order("desc").collect();
    }

    return await Promise.all(
      bookings.map(async (booking) => {
        const imageUrls = await Promise.all(
          booking.imageStorageIds.map((id) => ctx.storage.getUrl(id))
        );
        return { ...booking, imageUrls: imageUrls.filter(Boolean) as string[] };
      })
    );
  },
});

export const updateStatus = mutation({
  args: {
    bookingId: v.id("bookings"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const booking = await ctx.db.get(args.bookingId);
    if (!booking) {
      throw new ConvexError({ message: "Booking not found", code: "NOT_FOUND" });
    }
    await ctx.db.patch(args.bookingId, { status: args.status });
  },
});

export const assignTechnician = mutation({
  args: {
    bookingId: v.id("bookings"),
    technicianName: v.string(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.patch(args.bookingId, {
      technicianName: args.technicianName,
    });
  },
});

export const updateAdminNotes = mutation({
  args: {
    bookingId: v.id("bookings"),
    adminNotes: v.string(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    await ctx.db.patch(args.bookingId, { adminNotes: args.adminNotes });
  },
});

export const deleteBooking = mutation({
  args: { bookingId: v.id("bookings") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const booking = await ctx.db.get(args.bookingId);
    if (!booking) {
      throw new ConvexError({ message: "Booking not found", code: "NOT_FOUND" });
    }
    // Delete associated storage files
    await Promise.all(
      booking.imageStorageIds.map((id) => ctx.storage.delete(id))
    );
    await ctx.db.delete(args.bookingId);
  },
});
