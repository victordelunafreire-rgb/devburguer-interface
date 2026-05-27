import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import '../Styles.css';

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  // const {
  //   state: { dpmCheckerLink },
  // } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe has not loaded yet.');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);

      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        const products = cartProducts.map((product) => {
          return {
            id: Number(product.id),
            quantity: Number(product.quantity),
            price: Number(product.price),
          };
        });

        const { status } = await api.post(
          '/orders',
          { products },
          {
            validateStatus: () => true,
          },
        );

        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(
              `/completed?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 3000);
          clearCart();

          toast.success('Pedido Realizado com sucesso!');
        } else if (status === 409) {
          toast.error('Falha ao realizar o seu pedido');
        } else {
          throw new Error();
        }
      } catch {
        toast.error('🤖 Falha no sitema! Tente Novamente');
      }
    } else {
      navigate(
        `/completed?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <div className='container'>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement id='payment-element' options={paymentElementOptions} />
        <button
          type='submit'
          disabled={isLoading || !stripe || !elements}
          id='submit'
          className='button'
        >
          <span id='button-text'>
            {isLoading ? (
              <div className='spinner' id='spinner'></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id='payment-message'>{message}</div>}
      </form>
    </div>
  );
}
