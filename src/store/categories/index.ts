import { create } from 'zustand';

import { getCategoriesAndDocuments } from 'utils/firebase.utils';

import { CategoriesStore } from './interfaces';

export const useCategoriesStore = create<CategoriesStore>(set => ({
  isLoading: false,
  error: null,
  categoriesMap: {},
  getCategoriesMap: async () => {
    set(state => ({ ...state, isLoading: true }));
    try {
      const categoriesMap = await getCategoriesAndDocuments('collections');
      set(state => ({ ...state, categoriesMap, isLoading: false, error: null }));
    } catch (e: any) {
      set(state => ({ ...state, isLoading: false, error: e.message }));
    }
  }
}));
