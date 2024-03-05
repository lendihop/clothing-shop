import { FC, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { CategoriesPreview } from 'routes/categories-preview/categories-preview';
import { Category } from 'routes/category/category';
import { useCategoriesStore } from 'store/categories';
import { getCategoriesMapSelector } from 'store/categories/selectors';

import './shop.styles.scss';

export const Shop: FC = () => {
  const getCategoriesMap = useCategoriesStore(getCategoriesMapSelector);

  useEffect(() => {
    getCategoriesMap();
  }, [getCategoriesMap]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
