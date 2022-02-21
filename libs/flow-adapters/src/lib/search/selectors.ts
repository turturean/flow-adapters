import { createSelector, createFeatureSelector } from '@ngrx/store';

import { capitalize } from '../tools/tools';

export function createSearchSelectors<State, AdapterName>(
  stateKey: string,
  initialState: State,
  type: AdapterName
) {
  const selectState = createFeatureSelector<State>(stateKey);
  const keys = Object.keys(initialState) as (keyof State)[];

  return keys.reduce((acc, key) => {
    const propKey = `select${capitalize(String(type))}${capitalize(
      String(key)
    )}`;

    return {
      ...acc,
      [propKey]: createSelector(selectState, (state) => state && state[key]),
    };
  }, {});
}
