import {FC} from "react";

import {Button, BUTTON_TYPES} from '../button/button';
import {Product} from "../../contexts/products.context";

import './product-card.styles.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES.INVERTED}>Add to card</Button>
    </div>
  );
};
