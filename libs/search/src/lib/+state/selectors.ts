import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SelectorTypes } from './types';
import { capitalize } from '../tools/tools';
import { SearchState } from './models';

export function createSearchSelectors<
  State extends SearchState<any>,
  AdapterName = string
>(
  stateKey: string,
  initialState: State,
  type: AdapterName
): SelectorTypes<State, AdapterName> {
  const selectState = createFeatureSelector<State>(stateKey);
  const keys = Object.keys(initialState) as (keyof SearchState<any>)[];

  return keys.reduce((acc, key) => {
    const propKey = `select${capitalize(String(type))}${capitalize(key)}`;

    return {
      ...acc,
      [propKey]: createSelector(selectState, (state) => state && state[key]),
    };
  }, {} as SelectorTypes<State, AdapterName>);
}
