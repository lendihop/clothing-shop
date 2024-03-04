import { FC } from 'react';

import { CategoryPreview } from 'components/category-preview/category-preview';
import { useCategoriesStore } from 'store/categories';
import { categoriesMapSelector } from 'store/categories/selectors';

export const CategoriesPreview: FC = () => {
  const categoriesMap = useCategoriesStore(categoriesMapSelector);

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};
