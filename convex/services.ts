import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAllServices = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("services")
      .withIndex("by_order")
      .order("asc")
      .collect();
  },
});

export const getServicesByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("services")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .order("asc")
      .collect();
  },
});
