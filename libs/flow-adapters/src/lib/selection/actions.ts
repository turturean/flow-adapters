import { createAction, props } from '@ngrx/store';
import { PropsSelect } from './models';
import { capitalize } from '../tools/tools';

export function createSelectActions(type: string) {
  const entityType = capitalize(String(type));

  return {
    selectItems: createAction(`[${entityType}] select`, props<PropsSelect>()),
  };
}
