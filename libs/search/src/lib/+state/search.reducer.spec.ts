import { createSearchAdapter, SearchState } from 'flow-adapters-search';
import { Action, ActionReducer } from '@ngrx/store/src/models';

type TestType = {
  id: string;
  name: string;
};

describe('Search Reducer', () => {
  let adapter = createSearchAdapter<TestType>({
    stateKey: 'users',
    type: 'user',
    primaryKey: 'uniqId',
  });
  let initialState: SearchState<TestType>;
  let reducer: ActionReducer<SearchState<TestType>, Action>;

  beforeEach(() => {
    initialState = adapter.getInitialState();
    reducer = adapter.getReducer();
  });

  describe('Unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const newState = reducer(initialState, action);

      expect(initialState).toEqual(newState);
    });
  });
});
