import { createReducer, on, Action } from '@ngrx/store';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  addUser,
  addUserSuccess,
  addUserFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} from './user.actions';
import { UserState, initialState } from './user.state';

const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    users,
    loading: false,
    error: null,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(addUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
    error: null,
  })),
  on(addUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(updateUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map((u) => (u.id === user.id ? { ...u, ...user } : u)),
    loading: false,
    error: null,
  })),
  on(updateUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(deleteUser, (state, { id }) => ({
    ...state,
    loading: true,
  })),
  on(deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter((u) => u.id !== id),
    loading: false,
    error: null,
  })),
  on(deleteUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
