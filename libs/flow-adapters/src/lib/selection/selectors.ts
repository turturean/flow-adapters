import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SelectState } from './models';
import { FlowSelectorTypes } from '../types';

export function createSelectSelectors<State extends SelectState>(
  stateKey: string,
  initialState: State
): FlowSelectorTypes<State> {
  const selectState = createFeatureSelector<State>(stateKey);
  const keys = Object.keys(initialState) as (keyof SelectState)[];

  return keys.reduce((acc, key) => {
    const propKey = `${key}`;

    return {
      ...acc,
      [propKey]: createSelector(selectState, (state) => state && state[key]),
    };
  }, {}) as FlowSelectorTypes<State>;
}
