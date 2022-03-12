import { createSelectActions } from './actions';
import { createSelectReducer } from './reducer';
import { createSelectSelectors } from './selectors';
import { SelectActions, SelectedOption, SelectState } from './models';
import { FlowAdapter } from '../types';

export function createSelectAdapter<
  AdapterName extends string = string,
  AdapterState extends SelectState = SelectState
>(
  options: SelectedOption<AdapterName, AdapterState>
): FlowAdapter<SelectActions, AdapterState> {
  const { type, stateKey } = options;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const initialState: AdapterState = {
    selectedItems: [],
    ...options.initialState,
  };
  const actions = createSelectActions(type);
  const reducer = createSelectReducer<AdapterState>(initialState, actions);
  const selectors = createSelectSelectors(stateKey, initialState);

  return {
    getActions: () => actions,
    getReducer: () => reducer,
    getInitialState: () => initialState,
    getSelectors: () => selectors,
  };
}
