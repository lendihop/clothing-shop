import { FC, useContext } from 'react';

import { CategoryPreview } from 'components/category-preview/category-preview';
import { CategoriesContext } from 'contexts/categories.context';

export const CategoriesPreview: FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};
