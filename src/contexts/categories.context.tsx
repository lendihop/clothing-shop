import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';

import { ProductInterface } from 'interfaces/product.interface';
import { getCategoriesAndDocuments } from 'utils/firebase.utils';

interface CategoriesContextInterface {
  categoriesMap: Record<string, ProductInterface[]>;
}

export const CategoriesContext = createContext<CategoriesContextInterface>({
  categoriesMap: {}
});

export const CategoriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState<Record<string, ProductInterface[]>>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('collections');
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
