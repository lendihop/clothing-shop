import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Authentication } from 'routes/authentication/authentication';
import { Checkout } from 'routes/checkout/checkout';
import { Home } from 'routes/home/home';
import { Navigation } from 'routes/navigation/navigation';
import { Shop } from 'routes/shop/shop';

import './App.css';

export const App: FC = () => {
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
