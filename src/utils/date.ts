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

export function sortNewsByDate(newsArray: any[]) {
  return newsArray.sort((a, b) => {
    const parseDate = (str: string) => {
    const [d, m, y] = str.split("-");

    return new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  };
  return parseDate(b.data.date).getTime() - parseDate(a.data.date).getTime();
  })
}