import './cart-item.styles.scss';
import {FC} from "react";
import {CartItemInterface} from "../../interfaces/cart-item.interface";

interface CartItemProps {
  cartItem: CartItemInterface;
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
