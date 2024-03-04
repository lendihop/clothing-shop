import { UserStore } from './interfaces';

export const currentUserSelector = (state: UserStore) => state.currentUser;

export const setCurrentUserSelector = (state: UserStore) => state.setCurrentUser;
