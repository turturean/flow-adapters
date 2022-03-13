import { createSelectActions } from './actions';
import { createSelectReducer } from './reducer';
import { createSelectSelectors } from './selectors';
import { SelectActions, SelectedOption, SelectState } from './models';
import { FlowReducer, FlowSelector } from '../types';

export function createSelectAdapter<
  AdapterName extends string = string,
  AdapterState extends SelectState = SelectState
>(options: SelectedOption<AdapterName, AdapterState>) {
  const { type, stateKey } = options;
  const initialState: SelectState = {
    selectedItems: [],
    ...options.initialState,
  };
  const actions = createSelectActions(type);
  const reducer = createSelectReducer(initialState, actions);
  const selectors = createSelectSelectors(stateKey, initialState);

  return {
    getInitialState: () => initialState as SelectState,
    getActions: () => actions as SelectActions,
    getSelectors: () => selectors as FlowSelector<SelectState>,
    getReducer: () => reducer as FlowReducer<SelectState>,
  };
}
