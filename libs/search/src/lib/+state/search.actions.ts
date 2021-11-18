import { createAction, props } from '@ngrx/store';
import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import {
  SearchError,
  SearchPagination,
  SearchQuery,
  SearchSort,
} from './search.models';

import { capitalize, pluralize } from '../tools/tools';

export interface PropsSearch<T> {
  sort?: SearchSort;
  query?: SearchQuery;
  pagination?: SearchPagination;
}
export interface PropsSearchSuccess<T> {
  entities: T[];
  pagination: SearchPagination & { total: number };
}
export interface PropsSearchFailed<T> {
  error: SearchError | null;
}

export interface SearchEntityStateAdapter<T> {
  search: ActionCreator<
    string,
    (props: PropsSearch<T>) => PropsSearch<T> & TypedAction<string>
  >;
  searchSuccess: ActionCreator<
    string,
    (
      props: PropsSearchSuccess<T>
    ) => PropsSearchSuccess<T> & TypedAction<string>
  >;
  searchFailed: ActionCreator<
    string,
    (props: PropsSearchFailed<T>) => PropsSearchFailed<T> & TypedAction<string>
  >;
}

export function createSearchActions<T>(
  type: string
): SearchEntityStateAdapter<T> {
  const entityType = capitalize(type);
  const entityTypes = pluralize(type);

  return {
    search: createAction(
      `[${entityType}] search ${entityTypes}`,
      props<PropsSearch<T>>()
    ),
    searchSuccess: createAction(
      `[${entityType}] search success ${entityTypes}`,
      props<PropsSearchSuccess<T>>()
    ),
    searchFailed: createAction(
      `[${entityType}] search failed ${entityTypes}`,
      props<PropsSearchFailed<T>>()
    ),
  };
}
