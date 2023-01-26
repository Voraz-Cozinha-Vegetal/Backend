import { stripHtml } from "string-strip-html";

export default function inputSanitizer(text: string): string {
  return stripHtml(text).result.trim();
}
