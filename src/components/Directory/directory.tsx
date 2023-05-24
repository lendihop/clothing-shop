import React, {FC} from "react";
import {CategoryItem} from '../category-item/category-item';
import './directory.styles.scss';
import {Category} from "../../App";

interface DirectoryProps {
  categories: Category[];
}

export const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
