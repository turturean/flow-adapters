export interface IEntityActions {
    find(params?: any): any;
    findSuccess(params?: any): any;
    findError(params?: any): any;
    remove(remove?: any): any;
    removeSuccess(params?: any): any;
    removeError(params?: any): any;
    add(remove?: any): any;
    addSuccess(params?: any): any;
    addError(params?: any): any;
    update(params?: any): any;
    updateSuccess(params?: any): any;
    updateError(params?: any): any;
}
export interface IEntityTypes {
    FIND: string;
    FIND_SUCCESS: string;
    FIND_ERROR: string;
    REMOVE: string;
    REMOVE_SUCCESS: string;
    REMOVE_ERROR: string;
    ADD: string;
    ADD_SUCCESS: string;
    ADD_ERROR: string;
    UPDATE: string;
    UPDATE_SUCCESS: string;
    UPDATE_ERROR: string;
}
export declare const searchActionTypes: IEntityTypes;
export declare const createSearchActionTypes: <T>(type: any) => any;
export declare function makeSearchActions(type: any): IEntityActions;
export declare function createEntityActionsFactory(type?: string): {
    getActionTypes: () => IEntityTypes;
    getActions: () => IEntityActions;
};
