import { FC } from 'react';

import { useCartStore } from 'store/cart';
import { cartCountSelector, isCartOpenedSelector, setIsCartOpenedSelector } from 'store/cart/selectors';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

export const CartIcon: FC = () => {
  const cartCount = useCartStore(cartCountSelector);
  const isCartOpened = useCartStore(isCartOpenedSelector);
  const setIsCartOpened = useCartStore(setIsCartOpenedSelector);

  const toggleIsCartOpen = () => setIsCartOpened(!isCartOpened);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
