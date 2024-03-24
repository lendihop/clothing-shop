import { loadStripe } from '@stripe/stripe-js';

import { EnvVars } from 'env';

export const stripePromise = loadStripe(EnvVars.REACT_APP_STRIPE_PUBLISHABLE_KEY);
