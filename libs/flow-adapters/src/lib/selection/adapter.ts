import {
  ActionTypes,
  Adapter,
  SelectActions,
  SelectorTypes,
} from 'flow-adapters';
import { createSelectActions } from './actions';
import { createSelectReducer } from './reducer';
import { createSelectSelectors } from './selectors';
import { SelectedOption, SelectState } from './models';
import { capitalizeObjectPropsWithPrefix } from '../tools/tools';

export function createSelectAdapter<
  AdapterName extends string = string,
  AdapterState extends SelectState = SelectState
>(
  options: SelectedOption<AdapterName, AdapterState>
): ActionTypes<AdapterName, SelectActions> &
  SelectorTypes<AdapterState, AdapterName> &
  Adapter<SelectActions, AdapterState, AdapterName> {
  const { type, stateKey } = options;
  // @ts-ignore
  const initialState: AdapterState = {
    selectedItems: [],
    ...options.initialState,
  };
  const actions = createSelectActions(type);
  const reducer = createSelectReducer<AdapterState>(initialState, actions);
  const selectors = createSelectSelectors(stateKey, initialState, type);

  return {
    getActions: () => actions,
    getReducer: () => reducer,
    getInitialState: () => initialState,
    getSelectors: () => selectors,
    ...selectors,
    ...capitalizeObjectPropsWithPrefix<ActionTypes<AdapterName, AdapterState>>(
      actions,
      type
    ),
  };
}
