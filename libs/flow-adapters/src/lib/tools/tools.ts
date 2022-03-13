export function pluralize(word: string): string {
  return `${capitalize(word) + 's'}`;
}

export function capitalize(word: string): string {
  return `${word}`.charAt(0).toUpperCase() + `${word.substr(1)}`;
}
