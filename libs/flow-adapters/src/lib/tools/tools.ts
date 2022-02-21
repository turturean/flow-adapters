import { ActionTypes, SearchActions } from 'flow-adapters';

export function pluralize(word: string): string {
  return `${capitalize(word) + 's'}`;
}

export function capitalize(word: string): string {
  return `${word}`.charAt(0).toUpperCase() + `${word.substr(1)}`;
}

export function capitalizeObjectPropsWithPrefix<T>(
  obj: { [key: string]: any },
  prefix: string
): T {
  return Object.keys(obj).reduce((acc, key) => {
    const propKey = `${prefix}${capitalize(`${key}`)}`;
    return {
      ...acc,
      [propKey]: obj[key],
    };
  }, {}) as T;
}
