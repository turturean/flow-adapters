import { createFeatureSelector, createSelector } from '@ngrx/store';

export function createSelectors<T>(stateKey: string, initialState: { [key: string]: any }): T {
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
