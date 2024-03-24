import { FC } from 'react';

import { CheckoutItem } from 'components/checkout-item/checkout-item';
import { PaymentForm } from 'components/payment-form/payment-form';
import { useCartStore } from 'store/cart';
import { cartItemsSelector, cartTotalSelector } from 'store/cart/selectors';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

export const Checkout: FC = () => {
  const cartItems = useCartStore(cartItemsSelector);
  const cartTotal = useCartStore(cartTotalSelector);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>

      <PaymentForm />
    </CheckoutContainer>
  );
};
