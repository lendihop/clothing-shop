import {FC, useContext} from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

export const CartIcon: FC = () => {
  const { isCartOpened, setIsCartOpened, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpened(!isCartOpened);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};
