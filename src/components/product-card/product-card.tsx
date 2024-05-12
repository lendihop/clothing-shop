import { FC } from 'react';

import { Button, BUTTON_TYPES } from 'components/button/button';
import { ProductInterface } from 'interfaces/product.interface';
import { useCartStore } from 'store/cart';
import { addItemToCartSelector } from 'store/cart/selectors';

import { ProductCardContainer, ProductCardFooter, ProductCardName, ProductCardPrice } from './product-card.styles';

interface ProductCardProps {
  product: ProductInterface;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const addItemToCart = useCartStore(addItemToCartSelector);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPES.INVERTED} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};
