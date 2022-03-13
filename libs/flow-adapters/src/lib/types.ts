import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Action, ActionCreator, ActionReducer, TypedAction } from '@ngrx/store/src/models';

export type ActionTypes<T, Actions> = {
  [key in keyof Actions & string as `${T & string}${Capitalize<key>}`]: Actions[key];
};

export type FlowSelectorTypes<State> = {
  [key in keyof State & string as `${key}`]: MemoizedSelector<State, State[key]>;
};

export type AdapterConfig<AdapterName, AdapterState> = {
  stateKey: string;
  type: AdapterName;
  initialState?: Partial<AdapterState>;
};

export type FlowAdapter<Actions, State> = {
  getActions: () => Actions;
  getSelectors: () => FlowSelectorTypes<State>;
  getInitialState: () => State;
  getReducer: () => ActionReducer<State, Action>;
};

export type FlowSelector<State> = {
  [key in keyof State & string as `${key}`]: MemoizedSelector<State, State[key]>;
};
export type FlowReducer<State> = ActionReducer<State, Action>;
export type FlowAction<T> = ActionCreator<string, (props: T) => T & TypedAction<string>>;
