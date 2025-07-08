import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  news: defineTable({
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    category: v.string(),
    publishedAt: v.number(),
    featured: v.optional(v.boolean()),
  }).index("by_published", ["publishedAt"])
    .index("by_category", ["category"])
    .index("by_featured", ["featured"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    status: v.string(), // "new", "responded", "closed"
    submittedAt: v.number(),
  }).index("by_status", ["status"])
    .index("by_submitted", ["submittedAt"]),

  services: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
    category: v.string(), // "petroleum", "distribution", "value-added"
    features: v.array(v.string()),
    order: v.number(),
  }).index("by_category", ["category"])
    .index("by_order", ["order"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
