import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from 'components/button/button';
import { CartItem } from 'components/cart-item/cart-item';
import { useCartStore } from 'store/cart';
import { cartItemsSelector } from 'store/cart/selectors';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

export const CartDropdown: FC = () => {
  const cartItems = useCartStore(cartItemsSelector);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
