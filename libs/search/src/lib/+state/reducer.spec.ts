import { Action, ActionReducer } from '@ngrx/store/src/models';
import { createSearchAdapter } from './adapter';
import { SearchState } from './models';

type TestType = {
  id: string;
  name: string;
};

describe('Search Reducer', () => {
  const adapter = createSearchAdapter<TestType>({
    stateKey: 'users',
    type: 'user',
    primaryKey: 'uniqId',
  });
  let initialState: SearchState<TestType>;
  let reducer: ActionReducer<SearchState<TestType>, Action>;

  beforeEach(() => {
    initialState = adapter.initialState;
    reducer = adapter.reducer;
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
