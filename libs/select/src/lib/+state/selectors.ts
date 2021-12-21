import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SelectSelectors, SelectState } from './models';

export function createSelectSelectors<T>(
  stateKey: string,
  selectedItems: string
): SelectSelectors<T, SelectState<T>> {
  const selectState = createFeatureSelector<SelectState<T>>(stateKey);
  const selectItems = createSelector(
    selectState,
    (state) => state[selectedItems] || []
  );

  return {
    selectItems: selectItems,
  };
}
