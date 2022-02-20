import { createReducer, on } from '@ngrx/store';
import { Action, ActionReducer } from '@ngrx/store/src/models';
import { SelectActions, SelectState } from './models';

export function createSelectReducer<State extends SelectState>(
  initialState: State,
  actions: SelectActions
): ActionReducer<State, Action> {
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
