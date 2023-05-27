import {FC} from "react";

import {CategoryInterface} from "../../interfaces/category.interface";

import './category-item.styles.scss';

interface CategoryItemProps {
  category: CategoryInterface;
}

export const CategoryItem: FC<CategoryItemProps> = ({category}) => {
  const {title, imageUrl} = category;

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
