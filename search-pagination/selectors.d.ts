import { List, Map } from "immutable";
import { MemoizedSelector } from '@ngrx/store';
import { IPaginationState } from './state';
export interface ISearchPaginationSelectors {
    getPagination: MemoizedSelector<object, IPaginationState>;
    getLoading: MemoizedSelector<object, boolean>;
    getQuery: MemoizedSelector<object, Map<string, any>>;
    getIds: MemoizedSelector<object, List<string>>;
}
export declare function createSelectorsFactory(): {
    getSelectors: (state: any) => ISearchPaginationSelectors;
};
