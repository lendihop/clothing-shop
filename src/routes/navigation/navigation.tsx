import {FC, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import {CartContext} from "../../contexts/cart.context";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {CartIcon} from "../../components/cart-icon/cart-icon";

import {CartDropdown} from "../../components/cart-dropdown/cart-dropdown";
import {LogoContainer, NavButton, NavigationContainer, NavLink, NavLinks} from "./navigation.styles";

export const Navigation: FC = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpened } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavButton onClick={signOutUser}>
              SIGN OUT
            </NavButton>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
