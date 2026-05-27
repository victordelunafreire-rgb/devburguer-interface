import { createBrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import {
  Cart,
  Checkout,
  CompletedPayment,
  Home,
  Login,
  Menu,
  Register,
} from '../containers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: '/carrinho',
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },

  {
    path: '/checkout',
    element: (
      <>
        <Header />
        <Checkout />
        <Footer />
      </>
    ),
  },

  {
    path: '/completed',
    element: (
      <>
        <Header />
        <CompletedPayment />
        <Footer />
      </>
    ),
  },
]);
