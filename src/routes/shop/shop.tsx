import { Route, Routes } from 'react-router-dom';

import { CategoriesPreview } from 'routes/categories-preview/categories-preview';
import { Category } from 'routes/category/category';

import './shop.styles.scss';

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
