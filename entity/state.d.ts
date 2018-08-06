import { Map, List } from 'immutable';
export interface IEntityState<T> {
    entities: Map<string, List<T>>;
}
export declare function createInitialStateFactory(): {
    getInitialState<T>(): IEntityState<T>;
};
