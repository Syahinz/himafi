import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const news = defineCollection({
  loader: glob({ base: "src/content/news", pattern: "*.mdx" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    authorTag: z.string(),
    authorPic: z.string(),
    produced: z.string(),
    Description: z.string(),
    img: z.string(),
  }),
});

// schema baru untuk departments
const memberSchema = z.object({
  name: z.string(),
  role: z.string(),
  profilePic: z.string(),
  angkatan: z.string().optional(),
  instagramUsn: z.string().optional().default(""),
  instagramUrl: z.string().optional().default(""),
  bio: z.string(),
});

const programSchema = z.object({
  name: z.string(),
  programDesc: z.string().optional().default(""),
  date: z.string().optional().default(""),
  programPic: z.string().optional().default(""),
});

const departments = defineCollection({
  loader: glob({ base: "src/content/departments", pattern: "*.json" }),
  schema: z.object({
    name: z.string(),
    fullName: z.string(),
    photo: z.string(),
    secondPhoto: z.string(),
    description: z.string(),
    members: z.array(memberSchema),
    programs: z.array(programSchema).optional().default([]),
  }),
});

const historyItemSchema = z.object({
  era: z.string(),
  title: z.string(),
  description: z.string(),
  highlight: z.boolean(),
  photo: z.string().optional().default(""),
});

const history = defineCollection({
  loader: glob({ base: "src/content/history", pattern: "*.json" }),
  schema: z.object({
    items: z.array(historyItemSchema),
  }),
});

export const collections = { news, departments, history };
