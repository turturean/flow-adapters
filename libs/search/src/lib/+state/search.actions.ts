import { createAction, props } from '@ngrx/store';
import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import {
  SearchError,
  SearchPagination,
  SearchQuery,
  SearchSort,
} from './search.models';

import { capitalize } from '../tools/tools';

export interface PropsSearch {
  sort?: SearchSort;
  query?: SearchQuery;
  pagination?: SearchPagination;
}
export interface PropsSearchSuccess<T> {
  entities: T[];
  pagination: SearchPagination & { total: number };
}
export interface PropsSearchFailed {
  error: SearchError | null;
}

export interface SearchEntityStateAdapter<T> {
  search: ActionCreator<
    string,
    (props: PropsSearch) => PropsSearch & TypedAction<string>
  >;
  searchSuccess: ActionCreator<
    string,
    (
      props: PropsSearchSuccess<T>
    ) => PropsSearchSuccess<T> & TypedAction<string>
  >;
  searchFailed: ActionCreator<
    string,
    (props: PropsSearchFailed) => PropsSearchFailed & TypedAction<string>
  >;
}

export function createSearchActions<T>(
  type: string
): SearchEntityStateAdapter<T> {
  const entityType = capitalize(type);

  return {
    search: createAction(`[${entityType}] search`, props<PropsSearch>()),
    searchSuccess: createAction(
      `[${entityType}] search success`,
      props<PropsSearchSuccess<T>>()
    ),
    searchFailed: createAction(
      `[${entityType}] search failed`,
      props<PropsSearchFailed>()
    ),
  };
}
