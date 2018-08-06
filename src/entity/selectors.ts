import {List, Map} from "immutable";
import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IEntityState} from "./state";

export interface IEntitySelectors<T> {
  getEntities: MemoizedSelector<object, Map<string, List<T>>>;
}

export function createSelectorsFactory() {

  function getSelectors<T>(state): IEntitySelectors<T> {

    const entities = (state: IEntityState<T>): Map<string, List<T>> => {

      return state.entities;
    };

    return {
      getEntities: createSelector(state, entities),
    }
  }

  return {getSelectors}
}
