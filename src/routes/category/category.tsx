import { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ProductCard } from 'components/product-card/product-card';
import { useCategoriesStore } from 'store/categories';
import { categoriesMapSelector } from 'store/categories/selectors';

import './category.styles.scss';

export const Category: FC = () => {
  const { category } = useParams<string>();
  const categoriesMap = useCategoriesStore(categoriesMapSelector);
  const [products, setProducts] = useState(categoriesMap[category ?? '']);

  useEffect(() => {
    setProducts(categoriesMap[category ?? '']);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-container">
        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};
