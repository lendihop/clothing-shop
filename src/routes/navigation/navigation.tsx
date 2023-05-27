import {FC, useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import {CartContext} from "../../contexts/cart.context";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {CartIcon} from "../../components/cart-icon/cart-icon";

import './navigation.styles.scss';
import {CartDropdown} from "../../components/cart-dropdown/cart-dropdown";

export const Navigation: FC = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpened } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpened && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
