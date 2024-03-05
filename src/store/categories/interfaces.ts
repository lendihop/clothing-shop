import { ProductInterface } from 'interfaces/product.interface';

export interface CategoriesStore {
  isLoading: boolean;
  error: string | null;
  categoriesMap: Record<string, ProductInterface[]>;
  getCategoriesMap: () => void;
}
