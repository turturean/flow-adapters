import { createSearchActions } from './actions';
import { createSearchReducer } from './reducer';
import { createSearchSelectors } from './selectors';
import { Adapter, SearchEntity, SearchState } from './models';
import { createSearchOns } from './ons';

export type SearchAdapterOptions<T> = {
  stateKey: string;
  type: string;
  primaryKey?: string;
  initialState?: Partial<SearchState<T>>;
};

export function createSearchAdapter<T extends SearchEntity = SearchEntity>(
  options: SearchAdapterOptions<T>
): Adapter<T> {
  const { type, stateKey, primaryKey = 'id' } = options;
  const initialState: SearchState<T> = {
    perPage: 10,
    page: 1,
    isLoading: false,
    total: 0,
    query: {},
    error: null,
    ids: [],
    entities: {},
    primaryKey: primaryKey || 'id',
    sort: null,
    ...options.initialState,
  };
  const actions = createSearchActions<T>(type);
  const ons = createSearchOns(initialState, actions);
  const reducer = createSearchReducer<T>(initialState, ons);
  const selectors = createSearchSelectors<T>(stateKey);

  return {
    ...actions,
    ...selectors,
    reducer,
    initialState,
  };
}
