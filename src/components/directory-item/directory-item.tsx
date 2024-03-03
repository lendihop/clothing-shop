import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { CategoryInterface } from 'interfaces/category.interface';

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

interface DirectoryItemProps {
  category: CategoryInterface;
}

export const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
