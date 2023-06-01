import {FC} from "react";
import {Link} from "react-router-dom";

import {ProductInterface} from "../../interfaces/product.interface";
import {ProductCard} from "../product-card/product-card";

import './category-preview.styles.scss';

interface CategoryPreviewProps {
  title: string;
  products: ProductInterface[];
}

export const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <Link className='title' to={title}>
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);
