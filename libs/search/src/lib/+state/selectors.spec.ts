import { createSearchAdapter } from './adapter';
import { Adapter } from './models';

type TestType = {
  id: string;
  name: string;
};

describe('Search Selectors', () => {
  const entity: TestType = {
    id: 'id',
    name: 'test',
  };
  let adapter: Adapter<TestType>;

  beforeEach(() => {
    adapter = createSearchAdapter<TestType>({
      stateKey: 'users',
      type: 'user',
      initialState: {
        ids: ['1'],
        entities: {
          '1': entity,
        },
      },
      primaryKey: 'uniqId',
    });
  });

  describe('#selectIds', () => {
    it('return list of ids', () => {
      const ids = adapter.selectIds.projector(adapter.initialState);

      expect(ids.length).toEqual(adapter.initialState.ids.length);
      expect(ids).toEqual(adapter.initialState.ids);
    });
  });

  describe('#selectEntities', () => {
    it('return list of entities', () => {
      const entities = adapter.selectEntities.projector(
        adapter.initialState.ids,
        adapter.initialState.entities
      );

      expect(entities).toEqual([entity]);
    });

    it('return list of empty entities', () => {
      const entities = adapter.selectEntities.projector(
        [],
        adapter.initialState.entities
      );

      expect(entities).toEqual([]);
    });
  });

  describe('#selectError', () => {
    it('return default null', () => {
      const error = adapter.selectError.projector(adapter.initialState);

      expect(error).toBeNull();
    });

    it('return error', () => {
      const error = adapter.selectError.projector({
        ...adapter.initialState,
        error: { message: 'Some error' },
      });

      expect(error).toEqual({ message: 'Some error' });
    });
  });

  describe('#selectQuery', () => {
    it('return default null', () => {
      const query = adapter.selectQuery.projector(adapter.initialState);

      expect(query).toEqual({});
    });

    it('return current query', () => {
      const query = adapter.selectQuery.projector({
        ...adapter.initialState,
        query: { param1: '2' },
      });

      expect(query).toEqual({ param1: '2' });
    });
  });

  describe('#selectSort', () => {
    it('return default null', () => {
      const sort = adapter.selectSort.projector(adapter.initialState);

      expect(sort).toBeNull();
    });

    it('return current sort', () => {
      const sort = adapter.selectSort.projector({
        ...adapter.initialState,
        sort: {
          sortColumn: 'name',
          sortDir: 'asc',
        },
      });

      expect(sort).toEqual({
        sortColumn: 'name',
        sortDir: 'asc',
      });
    });
  });

  describe('#selectIsLoading', () => {
    it('return default false', () => {
      const isLoading = adapter.selectIsLoading.projector(adapter.initialState);

      expect(isLoading).toBeFalsy();
    });

    it('return loading true when was updated', () => {
      const isLoading = adapter.selectIsLoading.projector({
        ...adapter.initialState,
        isLoading: true,
      });

      expect(isLoading).toBeTruthy();
    });
  });

  describe('#selectPagination', () => {
    it('return default pagination', () => {
      const pagination = adapter.selectPagination.projector(
        adapter.initialState
      );

      expect(pagination).toEqual({
        perPage: 10,
        page: 1,
        total: 0,
      });
    });

    it('return loading true when was updated', () => {
      const pagination = adapter.selectPagination.projector({
        ...adapter.initialState,
        perPage: 40,
        page: 3,
        total: 300,
      });

      expect(pagination).toEqual({
        perPage: 40,
        page: 3,
        total: 300,
      });
    });
  });
});
