import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  SearchError,
  SearchModelInterface,
  SearchPagination,
  SearchQuery,
  SearchSelectors,
  SearchSort,
  SearchState,
} from './search.models';
import { SearchEntityStateAdapter } from './search.actions';
import { SearchAdapter } from './search.adapter';

export class SearchModel<T> implements SearchModelInterface<T> {
  protected selectors: SearchSelectors<T, SearchState<T>>;
  protected actions: SearchEntityStateAdapter<T>;

  isLoading$: Observable<boolean>;
  query$: Observable<SearchQuery>;
  sort$: Observable<SearchSort | null>;
  pagination$: Observable<SearchPagination>;
  entities$: Observable<T[]>;
  error$: Observable<SearchError | null>;
  ids$: Observable<string[]>;

  constructor(
    public store: Store<SearchState<T>>,
    protected adapter: SearchAdapter<T, SearchState<T>>
  ) {
    this.selectors = this.adapter.getSelectors();
    this.actions = this.adapter.getActions();

    this.isLoading$ = this.store.select(this.selectors.selectIsLoading);
    this.query$ = this.store.select(this.selectors.selectQuery);
    this.sort$ = this.store.select(this.selectors.selectSort);
    this.pagination$ = this.store.select(this.selectors.selectPagination);
    this.entities$ = this.store.select(this.selectors.selectEntities);
    this.error$ = this.store.select(this.selectors.selectError);
    this.ids$ = this.store.select(this.selectors.selectIds);
  }

  search(query: SearchQuery, pagination: SearchPagination): void {
    this.store.dispatch(this.actions.search({ query, pagination }));
  }

  searchQuery(query: SearchQuery): void {
    this.store.dispatch(this.actions.search({ query }));
  }
  searchWithPagination(pagination: SearchPagination): void {
    this.store.dispatch(this.actions.search({ pagination }));
  }

  searchWithSort(sort: SearchSort): void {
    this.store.dispatch(this.actions.search({ sort }));
  }
}

export function createSearchModelFactory<T>(
  adapter: SearchAdapter<T, SearchState<T>>
) {
  return function (store: Store<SearchState<T>>): SearchModel<T> {
    return new SearchModel(store, adapter);
  };
}
