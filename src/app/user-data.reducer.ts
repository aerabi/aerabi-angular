import {createReducer, on} from '@ngrx/store';
import {setFamilyName, setGivenName} from './user-data.actions';

export interface UserData {
  givenName: string;
  familyName: string;
}

export const initialState: UserData = { givenName: undefined, familyName: undefined };

const reducer = createReducer(
  initialState,
  on(setGivenName, (state, { givenName }) => ({ ...state, givenName})),
  on(setFamilyName, (state, { familyName }) => ({...state, familyName})),
);

export function userDataReducer(state, action): UserData {
  return reducer(state, action);
}
