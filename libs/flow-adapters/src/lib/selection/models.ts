import { ActionCreator, TypedAction } from '@ngrx/store/src/models';
import { AdapterConfig } from '../types';

export type SelectedOption<AdapterName, AdapterState> = AdapterConfig<AdapterName, AdapterState>;

export type SelectState = {
  selectedItems: string[];
};

export type PropsSelect = {
  selectedItem: string[];
};

export type SelectActions = {
  selectItems: ActionCreator<string, (props: PropsSelect) => PropsSelect & TypedAction<string>>;
};
