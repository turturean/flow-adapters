import { createAction, props } from '@ngrx/store';
import {
  PropsSearch,
  PropsSearchFailed,
  PropsSearchSuccess,
  SearchActions,
} from './models';
import { capitalize } from '../tools/tools';

export function createSearchActions<Entity, HasPagination, HasQuery>(
  type: string
): SearchActions<Entity, HasPagination, HasQuery> {
  const entityType = capitalize(type);

  return {
    search: createAction(
      `[${entityType}] search`,
      props<PropsSearch<HasPagination, HasQuery>>()
    ),
    searchSuccess: createAction(
      `[${entityType}] search success`,
      props<PropsSearchSuccess<Entity, HasPagination>>()
    ),
    searchFailed: createAction(
      `[${entityType}] search failed`,
      props<PropsSearchFailed>()
    ),
  };
}
