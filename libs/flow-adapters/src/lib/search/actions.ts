import { createAction, props } from '@ngrx/store';
import { capitalize } from '../tools/tools';
import { PropsSearch, PropsSearchFailed, PropsSearchSuccess } from './models';

export function createSearchActions(type: string) {
  const entityType = capitalize(String(type));

  return {
    search: createAction(`[${entityType}] search`, props<PropsSearch<true, true, true>>()),
    searchSuccess: createAction(`[${entityType}] search success`, props<PropsSearchSuccess<any, true>>()),
    searchFailed: createAction(`[${entityType}] search failed`, props<PropsSearchFailed>()),
  };
}
