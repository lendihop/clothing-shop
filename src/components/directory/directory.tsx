import {FC} from "react";

import {CategoryItem} from '../category-item/category-item';
import {CategoryInterface} from "../../interfaces/category.interface";

import './directory.styles.scss';

interface DirectoryProps {
  categories: CategoryInterface[];
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
