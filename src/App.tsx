import { FC, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Authentication } from 'routes/authentication/authentication';
import { Checkout } from 'routes/checkout/checkout';
import { Home } from 'routes/home/home';
import { Navigation } from 'routes/navigation/navigation';
import { Shop } from 'routes/shop/shop';
import { useUserStore } from 'store/user';
import { setCurrentUserSelector } from 'store/user/selectors';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from 'utils/firebase.utils';

import './App.css';

export const App: FC = () => {
  const setCurrentUser = useUserStore(setCurrentUserSelector);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [setCurrentUser]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
