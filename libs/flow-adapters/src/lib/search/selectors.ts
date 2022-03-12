import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SearchState } from './models';

export function createSearchSelectors<T>(
  stateKey: string,
  initialState: SearchState<any, true, true>
): T {
  const selectState = createFeatureSelector<{ [key: string]: any }>(stateKey);
  const keys = Object.keys(initialState) as (keyof { [key: string]: any })[];

  return keys.reduce((acc, key) => {
    const propKey = `${String(key)}`;

    return {
      ...acc,
      [propKey]: createSelector(selectState, (state) => state && state[key]),
    };
  }, {}) as T;
}

// IMPORTANT

// export function createSearchSelectors<
//   Entity,
//   HasPagination,
//   HasQuery,
//   AdapterName
//   >(
//   stateKey: string,
//   initialState: SearchState<Entity, HasPagination, HasQuery>,
//   type: AdapterName
// ) {
//   const selectState = createFeatureSelector<{ [key: string]: any }>(stateKey);
//   const keys = Object.keys(initialState) as (keyof { [key: string]: any })[];
//
//   return keys.reduce((acc, key) => {
//     const propKey = `select${capitalize(String(type))}${capitalize(
//       String(key)
//     )}`;
//
//     return {
//       ...acc,
//       [propKey]: createSelector(selectState, (state) => state && state[key]),
//     };
//   }, {}) as SelectorTypes<
//     SearchState<Entity, HasPagination, HasQuery>,
//     AdapterName
//     >;
// }
