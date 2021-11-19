import {
  createSearchSelectors,
  SearchSelectors,
  SearchState,
} from '@flow-adapters/search';

type TestType = {
  id: string;
  name: string;
};

describe('Search Selectors', () => {
  const entity: TestType = {
    id: 'id',
    name: 'test',
  };
  let initialState: SearchState<TestType>;
  let selectors: SearchSelectors<TestType, SearchState<TestType>>;

  beforeEach(() => {
    initialState = {
      ids: ['1'],
      entities: {
        '1': entity,
      },
      primaryKey: 'id',
      isLoading: false,
      error: null,
      query: {},
      sort: null,
      page: 1,
      perPage: 10,
      total: 0,
    };
    selectors = createSearchSelectors('test');
  });

  describe('#selectIds', () => {
    it('return list of ids', () => {
      const ids = selectors.selectIds.projector(initialState);

      expect(ids.length).toEqual(initialState.ids.length);
      expect(ids).toEqual(initialState.ids);
    });
  });

  describe('#selectEntities', () => {
    it('return list of entities', () => {
      const entities = selectors.selectEntities.projector(
        initialState.ids,
        initialState.entities
      );

      expect(entities).toEqual([entity]);
    });

    it('return list of empty entities', () => {
      const entities = selectors.selectEntities.projector(
        [],
        initialState.entities
      );

      expect(entities).toEqual([]);
    });
  });

  describe('#selectError', () => {
    it('return default null', () => {
      const error = selectors.selectError.projector(initialState);

      expect(error).toBeNull();
    });

    it('return error', () => {
      const error = selectors.selectError.projector({
        ...initialState,
        error: { message: 'Some error' },
      });

      expect(error).toEqual({ message: 'Some error' });
    });
  });

  describe('#selectQuery', () => {
    it('return default null', () => {
      const query = selectors.selectQuery.projector(initialState);

      expect(query).toEqual({});
    });

    it('return current query', () => {
      const query = selectors.selectQuery.projector({
        ...initialState,
        query: { param1: '2' },
      });

      expect(query).toEqual({ param1: '2' });
    });
  });

  describe('#selectSort', () => {
    it('return default null', () => {
      const sort = selectors.selectSort.projector(initialState);

      expect(sort).toBeNull();
    });

    it('return current sort', () => {
      const sort = selectors.selectSort.projector({
        ...initialState,
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
      const isLoading = selectors.selectIsLoading.projector(initialState);

      expect(isLoading).toBeFalsy();
    });

    it('return loading true when was updated', () => {
      const isLoading = selectors.selectIsLoading.projector({
        ...initialState,
        isLoading: true,
      });

      expect(isLoading).toBeTruthy();
    });
  });

  describe('#selectPagination', () => {
    it('return default pagination', () => {
      const pagination = selectors.selectPagination.projector(initialState);

      expect(pagination).toEqual({
        perPage: 10,
        page: 1,
        total: 0,
      });
    });

    it('return loading true when was updated', () => {
      const pagination = selectors.selectPagination.projector({
        ...initialState,
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
