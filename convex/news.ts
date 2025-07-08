import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getFeaturedNews = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("news")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .order("desc")
      .take(3);
  },
});

export const getAllNews = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const query = ctx.db
      .query("news")
      .withIndex("by_published")
      .order("desc");
    
    if (args.limit) {
      return await query.take(args.limit);
    }
    
    return await query.collect();
  },
});

export const getNewsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("news")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .order("desc")
      .collect();
  },
});
