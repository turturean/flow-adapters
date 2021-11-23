import { ReducerTypes } from '@ngrx/store/src/reducer_creator';
import { on } from '@ngrx/store';
import { ActionCreator } from '@ngrx/store/src/models';

import { SelectStateAdapter } from './actions';
import { SelectState } from './models';

export function createSelectOns<T, S extends SelectState<T>>(
  initialState: S,
  actions: SelectStateAdapter<T>
): ReducerTypes<S, readonly ActionCreator[]>[] {
  return [
    on(actions.select, (state, { selectedItem }) => {
      const currentSelection: SelectState<T> = {
        selectedItems: state.selectedItems,
      };

      if (Array.isArray(selectedItem)) {
        currentSelection.selectedItems = selectedItem;
      } else if (selectedItem) {
        currentSelection.selectedItems = [selectedItem];
      }

      return {
        ...state,
        ...currentSelection,
      };
    }),
  ];
}
