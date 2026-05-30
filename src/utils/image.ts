import type { ImageMetadata } from "astro";
export const docImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
export const authorImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/author/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
export function findImage(
  glob: Record<string, { default: ImageMetadata }>,
  name: string,
) {
  const entry = Object.entries(glob).find(
    ([path]) => path.split("/").pop()?.split(".")[0] === name,
  );
  return entry?.[1].default;
}
