import { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ProductCard } from 'components/product-card/product-card';
import { Spinner } from 'components/spinner/spinner';
import { useCategoriesStore } from 'store/categories';
import { categoriesIsLoadingSelector, categoriesMapSelector } from 'store/categories/selectors';

import './category.styles.scss';

export const Category: FC = () => {
  const { category } = useParams<string>();
  const categoriesMap = useCategoriesStore(categoriesMapSelector);
  const isLoading = useCategoriesStore(categoriesIsLoadingSelector);
  const [products, setProducts] = useState(categoriesMap[category ?? '']);

  useEffect(() => {
    setProducts(categoriesMap[category ?? '']);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products && products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </>
  );
};
