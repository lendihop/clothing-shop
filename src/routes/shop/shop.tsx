import {Route, Routes} from "react-router-dom";

import {CategoriesPreview} from "../categories-preview/categories-preview";

import './shop.styles.scss';
import {Category} from "../category/category";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};
