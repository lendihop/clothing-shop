import {FC, useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';

import { UserContext } from '../../context/user.context';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

export const Navigation: FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            <span className='nav-link' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
