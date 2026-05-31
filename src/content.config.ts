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
  bio: z.string(),
});

const programSchema = z.object({
  name: z.string(),
  programDesc: z.string(),
  date: z.string(),
  programPic: z.string(),
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
    programs: z.array(programSchema),
  }),
});

export const collections = { news, departments };
