export function splitTextToLines(text: string): string[] {
  return text.split(/\r?\n/).filter((line) => line.trim() !== '')
}
