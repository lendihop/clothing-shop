import { CategoriesStore } from './interfaces';

export const categoriesIsLoadingSelector = (state: CategoriesStore) => state.isLoading;
export const categoriesErrorSelector = (state: CategoriesStore) => state.error;
export const categoriesMapSelector = (state: CategoriesStore) => state.categoriesMap;

export const getCategoriesMapSelector = (state: CategoriesStore) => state.getCategoriesMap;
