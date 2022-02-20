import { createAction, props } from '@ngrx/store';
import { PropsSearchFailed } from 'flow-adapters';
import {
  PropsSearchWithPagination,
  PropsSearchWithPaginationSuccess,
  SearchActions,
} from './models';
import { capitalize } from '../tools/tools';

export function createSearchWithPaginationActions<T>(
  type: string
): SearchActions<T> {
  const entityType = capitalize(type);

  return {
    search: createAction(
      `[${entityType}] search`,
      props<PropsSearchWithPagination>()
    ),
    searchSuccess: createAction(
      `[${entityType}] search success`,
      props<PropsSearchWithPaginationSuccess<T>>()
    ),
    searchFailed: createAction(
      `[${entityType}] search failed`,
      props<PropsSearchFailed>()
    ),
  };
}
