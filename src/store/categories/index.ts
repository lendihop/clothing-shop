import { create } from 'zustand';

import { getCategoriesAndDocuments } from 'utils/firebase.utils';

import { CategoriesStore } from './interfaces';

export const useCategoriesStore = create<CategoriesStore>(set => ({
  categoriesMap: {},
  getCategoriesMap: async () => {
    const categoriesMap = await getCategoriesAndDocuments('collections');
    set(state => ({ ...state, categoriesMap }));
  }
}));
