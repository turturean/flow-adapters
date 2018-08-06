import { List, Map } from "immutable";
import { MemoizedSelector } from '@ngrx/store';
export interface IEntitySelectors<T> {
    getEntities: MemoizedSelector<object, Map<string, List<T>>>;
}
export declare function createSelectorsFactory(): {
    getSelectors: <T>(state: any) => IEntitySelectors<T>;
};
