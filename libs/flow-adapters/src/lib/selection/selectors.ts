import { SelectState } from './models';
import { createSelectors } from '../tools/adapter-selector';

export function createSelectSelectors<T>(stateKey: string, initialState: SelectState) {
  return createSelectors<T>(stateKey, initialState) as T;
}
