import {FC} from "react";

import {DirectoryItem} from '../directory-item/directory-item';
import {CategoryInterface} from "../../interfaces/category.interface";

import './directory.styles.scss';

interface DirectoryProps {
  categories: CategoryInterface[];
}

export const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
