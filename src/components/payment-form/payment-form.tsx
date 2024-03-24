import { FC, FormEventHandler, useState } from 'react';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { BUTTON_TYPES } from 'components/button/button';
import { useCartStore } from 'store/cart';
import { cartTotalSelector } from 'store/cart/selectors';
import { useUserStore } from 'store/user';
import { currentUserSelector } from 'store/user/selectors';

import { FormContainer, PaymentButton, PaymentFormContainer } from './payment-form.styles';

export const PaymentForm: FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useCartStore(cartTotalSelector);
  const currentUser = useUserStore(currentUserSelector);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      alert('Oops, something went wrong!');
      return;
    }

    const name = currentUser?.displayName;

    if (!name) {
      alert('Please login first.');
      return;
    }

    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: cartTotal * 100 })
    }).then(res => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton buttonType={BUTTON_TYPES.INVERTED} isLoading={isProcessingPayment}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
