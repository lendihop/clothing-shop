import { ProductInterface } from 'interfaces/product.interface';

export interface CategoriesStore {
  categoriesMap: Record<string, ProductInterface[]>;
  getCategoriesMap: () => void;
}
