export function normalizePhone(phone: string): string {
  let normalized = phone.trim();

  if (normalized.startsWith("+234")) {
    return normalized; 
  }

  if (normalized.startsWith("0")) {
    return normalized.replace(/^0/, "+234");
  }

  return `+234${normalized}`;
}
