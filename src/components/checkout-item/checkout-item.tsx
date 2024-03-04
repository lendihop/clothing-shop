import { FC } from 'react';

import { CartItemInterface } from 'interfaces/cart-item.interface';
import { useCartStore } from 'store/cart';
import { addItemToCartSelector, clearItemFromCartSelector, removeItemFromCartSelector } from 'store/cart/selectors';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
  cartItem: CartItemInterface;
}

export const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const addItemToCart = useCartStore(addItemToCartSelector);
  const removeItemToCart = useCartStore(removeItemFromCartSelector);
  const clearItemFromCart = useCartStore(clearItemFromCartSelector);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
