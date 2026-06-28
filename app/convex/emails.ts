"use node";

import escapeHtml from "escape-html";
import { Hercules } from "@usehercules/sdk";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";

const hercules = new Hercules({
  apiKey: process.env.HERCULES_API_KEY!,
  apiVersion: "2025-12-09",
});

const SERVICE_LABELS: Record<string, string> = {
  sofa: "Sofa Repair",
  recliner: "Recliner Repair",
  bed: "Bed Repair",
  chair: "Chair Repair",
  polish: "Wood Polish",
};

// Sender email — user must verify this in the Emails tab
const FROM_EMAIL = "support@furnirevive.com";
const ADMIN_EMAIL = "support@furnirevive.com";

export const sendBookingConfirmation = internalAction({
  args: {
    to: v.string(),
    customerName: v.string(),
    bookingNumber: v.string(),
    service: v.string(),
    date: v.string(),
    timeSlot: v.string(),
    estimatedPrice: v.number(),
  },
  handler: async (_ctx, args) => {
    try {
      await hercules.email.send({
        from: FROM_EMAIL,
        to: args.to,
        subject: `Booking Confirmed — ${escapeHtml(args.bookingNumber)}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #6b4226;">Booking Confirmed!</h1>
            <p>Hi ${escapeHtml(args.customerName)},</p>
            <p>Your furniture repair booking has been received. Here are the details:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Booking ID</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(args.bookingNumber)}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Service</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(SERVICE_LABELS[args.service] ?? args.service)}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(args.date)}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Time Slot</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(args.timeSlot)}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Est. Price</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\u20B9${args.estimatedPrice}</td></tr>
            </table>
            <p>Our team will confirm your booking shortly. You'll receive an update once a technician is assigned.</p>
            <p style="color: #888; font-size: 12px;">— FurniRevive Team</p>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send booking confirmation email:", error);
    }
  },
});

export const sendAdminNotification = internalAction({
  args: {
    bookingNumber: v.string(),
    customerName: v.string(),
    customerEmail: v.string(),
    service: v.string(),
    date: v.string(),
    timeSlot: v.string(),
    phone: v.string(),
    address: v.string(),
    landmark: v.optional(v.string()),
    description: v.string(),
    estimatedPrice: v.number(),
  },
  handler: async (_ctx, args) => {
    const serviceLabel = escapeHtml(SERVICE_LABELS[args.service] ?? args.service);
    const landmarkRow = args.landmark
      ? `<tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Landmark</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${escapeHtml(args.landmark)}</td></tr>`
      : "";

    try {
      await hercules.email.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `🚨 New Booking Alert - FurniRevive`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fffaf5; border: 1px solid #e8d5c0; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #6b4226, #8b5e3c); padding: 24px 28px;">
              <h1 style="color: #fff; margin: 0; font-size: 22px;">🚨 New Booking Alert</h1>
              <p style="color: #f0dcc8; margin: 6px 0 0; font-size: 14px;">A new booking has been placed on FurniRevive</p>
            </div>
            <div style="padding: 24px 28px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Booking ID</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333; font-weight: 700;">${escapeHtml(args.bookingNumber)}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Customer Name</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${escapeHtml(args.customerName)}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Email</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${escapeHtml(args.customerEmail)}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Phone</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${escapeHtml(args.phone)}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Service</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${serviceLabel}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Date</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${escapeHtml(args.date)}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Time</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${escapeHtml(args.timeSlot)}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Estimated Price</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333; font-weight: 700;">₹${args.estimatedPrice}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #8b6f47; font-weight: 600;">Address</td><td style="padding: 10px 12px; border-bottom: 1px solid #f0e6db; color: #333;">${escapeHtml(args.address)}</td></tr>
                ${landmarkRow}
              </table>
              <div style="background: #fff; border: 1px solid #e8d5c0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <p style="margin: 0 0 6px; color: #8b6f47; font-weight: 600; font-size: 13px;">Issue Description</p>
                <p style="margin: 0; color: #333; line-height: 1.5;">${escapeHtml(args.description)}</p>
              </div>
              <p style="color: #999; font-size: 12px; margin: 16px 0 0; text-align: center;">— FurniRevive Admin Notification</p>
            </div>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send admin notification email:", error);
    }
  },
});
