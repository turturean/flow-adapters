import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Action, ActionReducer } from '@ngrx/store/src/models';

export type ActionTypes<T, Actions> = {
  [key in keyof Actions & string as `${T &
    string}${Capitalize<key>}`]: Actions[key];
};

export type SelectorTypes<State, AdapterName> = {
  [key in keyof State & string as `select${Capitalize<
    AdapterName & string
  >}${Capitalize<key>}`]: MemoizedSelector<State, State[key]>;
};

export type AdapterConfig<AdapterName, AdapterState> = {
  stateKey: string;
  type: AdapterName;
  initialState?: Partial<AdapterState>;
};

export type Adapter<Actions, State, AdapterName> = {
  getActions: () => Actions;
  getSelectors: () => SelectorTypes<State, AdapterName>;
  getInitialState: () => State;
  getReducer: () => ActionReducer<State, Action>;
};
