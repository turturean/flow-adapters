import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  SearchError,
  SearchModelInterface,
  SearchPagination,
  SearchQuery,
  SearchSort,
  SearchState,
  Adapter,
} from './models';

export class SearchModel<T> implements SearchModelInterface<T> {
  isLoading$: Observable<boolean>;
  query$: Observable<SearchQuery>;
  sort$: Observable<SearchSort | null>;
  pagination$: Observable<SearchPagination>;
  entities$: Observable<T[]>;
  error$: Observable<SearchError | null>;
  ids$: Observable<string[]>;

  constructor(
    public store: Store<SearchState<T>>,
    protected adapter: Adapter<T>
  ) {
    this.isLoading$ = this.store.select(this.adapter.selectIsLoading);
    this.query$ = this.store.select(this.adapter.selectQuery);
    this.sort$ = this.store.select(this.adapter.selectSort);
    this.pagination$ = this.store.select(this.adapter.selectPagination);
    this.entities$ = this.store.select(this.adapter.selectEntities);
    this.error$ = this.store.select(this.adapter.selectError);
    this.ids$ = this.store.select(this.adapter.selectIds);
  }

  search(query: SearchQuery, pagination: SearchPagination): void {
    this.store.dispatch(this.adapter.search({ query, pagination }));
  }

  searchQuery(query: SearchQuery): void {
    this.store.dispatch(this.adapter.search({ query }));
  }
  searchWithPagination(pagination: SearchPagination): void {
    this.store.dispatch(this.adapter.search({ pagination }));
  }

  searchWithSort(sort: SearchSort): void {
    this.store.dispatch(this.adapter.search({ sort }));
  }
}

export function createSearchModelFactory<T>(adapter: Adapter<T>) {
  return function (store: Store<SearchState<T>>): SearchModel<T> {
    return new SearchModel(store, adapter);
  };
}
