import { createReducer, on } from '@ngrx/store';
import { SelectActions, SelectState } from './models';

export function createSelectReducer(initialState: SelectState, actions: SelectActions) {
  return createReducer(
    initialState,
    on(actions.selectItems, (state, { selectedItem }) => {
      const currentSelection = {
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
    })
  );
}
