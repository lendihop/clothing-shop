import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from 'assets/crown.svg';
import { CartDropdown } from 'components/cart-dropdown/cart-dropdown';
import { CartIcon } from 'components/cart-icon/cart-icon';
import { useCartStore } from 'store/cart';
import { isCartOpenedSelector } from 'store/cart/selectors';
import { useUserStore } from 'store/user';
import { currentUserSelector } from 'store/user/selectors';
import { signOutUser } from 'utils/firebase.utils';

import { LogoContainer, NavButton, NavigationContainer, NavLink, NavLinks } from './navigation.styles';

export const Navigation: FC = () => {
  const currentUser = useUserStore(currentUserSelector);
  const isCartOpened = useCartStore(isCartOpenedSelector);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? <NavButton onClick={signOutUser}>SIGN OUT</NavButton> : <NavLink to="/auth">SIGN IN</NavLink>}
          <CartIcon />
        </NavLinks>
        {isCartOpened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
