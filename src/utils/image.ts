import type { ImageMetadata } from "astro";
export const docImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
export const authorImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/author/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

export const memberImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/member/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
export const programsImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/programs/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
export const structureImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/structure/*.{jpg,jpeg,png,webp}",
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
