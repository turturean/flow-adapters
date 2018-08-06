export declare function createActionTypes(actionTypes: any): <T>(type: any) => any;
export declare function createAction(type: any, action: any): (payload: any) => {
    type: any;
    payload: any;
};
