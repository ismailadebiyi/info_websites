import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("contacts", {
      ...args,
      status: "new",
      submittedAt: Date.now(),
    });
  },
});

export const getContacts = query({
  args: { status: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (args.status !== undefined) {
      return await ctx.db
        .query("contacts")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }
    
    return await ctx.db
      .query("contacts")
      .withIndex("by_submitted")
      .order("desc")
      .collect();
  },
});
