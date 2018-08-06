export interface ISearchPaginationActions {
    search(params?: any): any;
    searchSuccess(params?: any): any;
    searchError(params?: any): any;
    searchReload(params?: any): any;
    clear(params?: any): any;
}
export interface ISearchPaginationTypes {
    SEARCH: string;
    SEARCH_SUCCESS: string;
    SEARCH_ERROR: string;
    SEARCH_RELOAD: string;
    CLEAR: string;
}
export declare const searchActionTypes: ISearchPaginationTypes;
export declare const createSearchActionTypes: <T>(type: any) => any;
export declare function makeSearchActions(type: any): ISearchPaginationActions;
export declare function createSearchPaginationActionsFactory(type?: string): {
    getActionTypes: () => ISearchPaginationTypes;
    getActions: () => ISearchPaginationActions;
};
