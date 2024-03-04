import { CategoriesStore } from './interfaces';

export const categoriesMapSelector = (state: CategoriesStore) => state.categoriesMap;

export const getCategoriesMapSelector = (state: CategoriesStore) => state.getCategoriesMap;
