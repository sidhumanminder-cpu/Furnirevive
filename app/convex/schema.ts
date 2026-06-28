import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    role: v.union(v.literal("admin"), v.literal("user")),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_role", ["role"]),

  bookings: defineTable({
    userId: v.optional(v.id("users")),
    bookingNumber: v.string(),
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
    customerEmail: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    estimatedPrice: v.number(),
    technicianName: v.optional(v.string()),
    adminNotes: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_booking_number", ["bookingNumber"]),

  repairCaseStudies: defineTable({
    repairType: v.union(
      v.literal("sofa"),
      v.literal("leather"),
      v.literal("recliner"),
      v.literal("furniture"),
      v.literal("upholstery")
    ),
    problemType: v.union(
      v.literal("sagging"),
      v.literal("tear"),
      v.literal("broken-frame"),
      v.literal("spring"),
      v.literal("polish"),
      v.literal("mechanism"),
      v.literal("other")
    ),
    location: v.string(),
    intentType: v.union(
      v.literal("near_me"),
      v.literal("cost"),
      v.literal("urgency"),
      v.literal("type"),
      v.literal("gallery")
    ),
    beforeImageId: v.id("_storage"),
    afterImageId: v.id("_storage"),
    altTextBefore: v.string(),
    altTextAfter: v.string(),
    problem: v.string(),
    solution: v.string(),
    materialsUsed: v.optional(v.string()),
    costMin: v.number(),
    costMax: v.number(),
    timeTaken: v.string(),
    heading: v.string(),
    pageSlugs: v.array(v.string()),
    isFeatured: v.boolean(),
    displayOrder: v.number(),
  })
    .index("by_repair_type", ["repairType"])
    .index("by_intent_type", ["intentType"])
    .index("by_is_featured", ["isFeatured"]),
});
