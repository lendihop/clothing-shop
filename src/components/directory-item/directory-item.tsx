import {FC} from "react";

import {CategoryInterface} from "../../interfaces/category.interface";

import './directory-item.styles.scss';

interface DirectoryItemProps {
  category: CategoryInterface;
}

export const DirectoryItem: FC<DirectoryItemProps> = ({category}) => {
  const {title, imageUrl} = category;

  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
