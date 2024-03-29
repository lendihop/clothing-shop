import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'App';

import { stripePromise } from './utils/stripe.utils';

import './index.scss';

// eslint-disable-next-line no-type-assertion/no-type-assertion
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </React.StrictMode>
);
