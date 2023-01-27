import { stripHtml } from "string-strip-html";

export function sanitizer(text: string): string {
  return stripHtml(text).result.trim();
}
