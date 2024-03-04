import { create } from 'zustand';

import { UserStore } from './interfaces';

export const useUserStore = create<UserStore>(set => ({
  currentUser: null,
  setCurrentUser: currentUser => set(state => ({ ...state, currentUser }))
}));
