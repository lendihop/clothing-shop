import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'App';

import { GlobalStyle } from './global.styles';
import { stripePromise } from './utils/stripe.utils';

// eslint-disable-next-line no-type-assertion/no-type-assertion
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </React.StrictMode>
);
