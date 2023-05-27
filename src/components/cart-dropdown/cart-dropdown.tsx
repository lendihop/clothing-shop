import {FC} from 'react';

import {Button} from '../button/button';

import './cart-dropdown.styles.scss';

export const CartDropdown: FC = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items' />
    <Button>GO TO CHECKOUT</Button>
  </div>
);
