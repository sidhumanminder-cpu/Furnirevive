import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitLead = mutation({
  args: {
    name: v.string(),
    company: v.optional(v.string()),
    phone: v.string(),
    city: v.string(),
    marketSlug: v.string(),
    message: v.optional(v.string()),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("kitchenPartnerLeads", args);
  },
});
