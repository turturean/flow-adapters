import { createSelectActions } from './actions';
import { createSelectReducer } from './reducer';
import { createSelectSelectors } from './selectors';
import { Adapter, SelectedOption, SelectState } from './models';
import { createSelectOns } from './ons';

export function createSelectAdapter<
  T = string,
  S extends SelectState<T> = SelectState<T>
>(
  options: SelectedOption<S> = {
    stateKey: '',
    type: '',
  }
) {
  const { type, stateKey, selectedItems = 'selectedItems' } = options;
  type State = SelectState<T, typeof options['selectedItems']>;

  const defaultState = { [selectedItems]: [] };
  const initialState: State = {
    ...defaultState,
    ...options.initialState,
  };
  const actions = createSelectActions<T>(type);
  const ons = createSelectOns<State, T>(initialState, actions, selectedItems);
  const reducer = createSelectReducer<State>(initialState, ons);
  const selectors = createSelectSelectors<T>(stateKey, selectedItems);

  return {
    ...actions,
    ...selectors,
    reducer: reducer,
    initialState: initialState,
  } as Adapter<T, State>;
}
