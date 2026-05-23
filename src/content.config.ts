import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const news = defineCollection({
  loader: file("src/content/news.json"),
  schema: z.object({
    id: z.string(),
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

export const collections = { news };
