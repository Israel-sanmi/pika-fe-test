export const  transformTrends=(trends: Record<string, number>)=> {
  return Object.entries(trends).map(([date, value]) => ({
    date: new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    value,
  }));
}
