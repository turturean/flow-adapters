import {Map, List} from 'immutable';

export interface IEntityState<T> {
  entities: Map<string, List<T>>;
}

export function createInitialStateFactory() {
  return {
    getInitialState<T>(): IEntityState<T> {
      return {
        entities: Map<string, List<T>>()
      }
    }
  }
}
