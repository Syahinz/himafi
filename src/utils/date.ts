export function parseDate(str: string) {
  const [d, m, y] = str.split("-");
  return new Date(`${y}-${m}-${d}`);
}

export function formatDate(str: string) {
  const date = parseDate(str);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
