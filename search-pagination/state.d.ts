import { List, Map } from "immutable";
export interface IPaginationState {
    limit: number;
    page: number;
    totals: number;
}
export interface ISearchPaginationState extends IPaginationState {
    ids: List<string>;
    loading: boolean;
    query: Map<string, any>;
}
export declare function getInitialSearchPaginationState(additionalState?: any): any;
export declare function createInitialStateFactory(): {
    getInitialState: (additionalState?: ISearchPaginationState) => ISearchPaginationState;
};
