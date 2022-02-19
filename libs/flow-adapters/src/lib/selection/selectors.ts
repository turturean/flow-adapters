import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SelectState } from './models';
import { SelectorTypes } from '../types';
import { capitalize } from '../tools/tools';

export function createSelectSelectors<
  State extends SelectState,
  AdapterName = string
>(
  stateKey: string,
  initialState: State,
  type: AdapterName
): SelectorTypes<State, AdapterName> {
  const selectState = createFeatureSelector<State>(stateKey);
  const keys = Object.keys(initialState) as (keyof SelectState)[];

  return keys.reduce((acc, key) => {
    const propKey = `select${capitalize(String(type))}${capitalize(key)}`;

    return {
      ...acc,
      [propKey]: createSelector(selectState, (state) => state && state[key]),
    };
  }, {} as SelectorTypes<State, AdapterName>);
}
