import { FC } from 'react';

import { Button, BUTTON_TYPES } from 'components/button/button';
import { ProductInterface } from 'interfaces/product.interface';
import { useCartStore } from 'store/cart';
import { addItemToCartSelector } from 'store/cart/selectors';

import './product-card.styles.scss';

interface ProductCardProps {
  product: ProductInterface;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const addItemToCart = useCartStore(addItemToCartSelector);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES.INVERTED} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};
