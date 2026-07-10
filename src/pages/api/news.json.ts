import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ request }) => {
  // Ambil semua konten berita dari koleksi MDX
  const allNews = await getCollection("news");

  // Urutkan berdasarkan tanggal terbaru dulu
  const sorted = allNews.sort((a, b) => {
    // Format tanggal: "DD-MM-YYYY"
    const parseDate = (str: string) => {
      const [d, m, y] = str.split("-").map(Number);
      return new Date(y, m - 1, d).getTime();
    };
    return parseDate(b.data.date) - parseDate(a.data.date);
  });

  // Bentuk payload JSON — hanya field yang dibutuhkan WP
  const payload = sorted.map((item) => ({
    id: item.id,
    title: item.data.title,
    date: item.data.date,
    author: item.data.author,
    authorTag: item.data.authorTag,
    description: item.data.Description,
    produced: item.data.produced,
    // Link artikel lengkap di Astro (sesuaikan BASE_URL saat deploy)
    url: `/news/${item.id}`,
    // Nama file gambar — WordPress bisa pakai ini untuk tampilkan thumbnail
    img: item.data.img,
  }));

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      // Izinkan WordPress (domain manapun) fetch endpoint ini
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      // Cache 5 menit
      "Cache-Control": "public, max-age=300",
    },
  });
};
