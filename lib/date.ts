export const dateFormat = (iso?: string) =>
  new Date(iso!).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

export const timeFormat = (iso?: string) =>
  new Date(iso!).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
