import { FC } from 'react';

import { CheckoutItem } from 'components/checkout-item/checkout-item';
import { useCartStore } from 'store/cart';
import { cartItemsSelector, cartTotalSelector } from 'store/cart/selectors';

import './checkout.styles.scss';

export const Checkout: FC = () => {
  const cartItems = useCartStore(cartItemsSelector);
  const cartTotal = useCartStore(cartTotalSelector);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};
