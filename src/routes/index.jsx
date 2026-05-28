import { Route, Routes } from 'react-router-dom';
import {
  Cart,
  Checkout,
  CompletedPayment,
  Home,
  Login,
  Menu,
  Register,
} from '../containers';
import { UserLayout } from '../layouts/UserLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cardapio' element={<Menu />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/completed' element={<CompletedPayment />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Register />} />
    </Routes>
  );
}
