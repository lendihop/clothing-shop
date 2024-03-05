import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { getCategoriesAndDocuments } from 'utils/firebase.utils';

import { CategoriesStore } from './interfaces';

export const useCategoriesStore = create<CategoriesStore>()(
  persist(
    set => ({
      categoriesMap: {},
      getCategoriesMap: async () => {
        const categoriesMap = await getCategoriesAndDocuments('collections');
        set(state => ({ ...state, categoriesMap }));
      }
    }),
    {
      name: 'categories-storage',
      version: 1
    }
  )
);
