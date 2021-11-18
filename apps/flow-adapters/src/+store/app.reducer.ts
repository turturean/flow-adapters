import { userAdapter } from './app.adapter';
import {createReducer} from "@ngrx/store";

// use directly reducer
// export const reducers = {
//   users: userAdapter.getReducer(),
// };

// combine wih multiple adapters or custom actions and reducers
const userReducer = createReducer(
  {
    ...userAdapter.getInitialState(),
    // other initialState
  },
  ...userAdapter.getOns(),
  // other adapters or custom ons
)
export const reducers = {
  users: userReducer,
};
