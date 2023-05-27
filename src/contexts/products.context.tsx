import {createContext, FC, PropsWithChildren, useState} from 'react';

import PRODUCTS from '../shop-data.json';
import {ProductInterface} from "../interfaces/product.interface";

interface ProductContextInterface {
  products: ProductInterface[]
}

export const ProductsContext = createContext<ProductContextInterface>({
  products: [],
});

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [products] = useState<ProductInterface[]>(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
