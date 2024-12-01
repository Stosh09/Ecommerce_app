import { Route, Routes } from 'react-router-dom';
import AuthLayout from './component/authentication/authLayout';
import AuthSignin from './pages/Authentication/signin';
import AuthSignup from './pages/Authentication/signup';
import AdminLayout from './component/administrator-page/layout';
import AdminDashboard from './pages/Administrator-page/dashboard';
import AdminFeatures from './pages/Administrator-page/features';
import AdminOrders from './pages/Administrator-page/orders';
import AdminProducts from './pages/Administrator-page/products';
import StoreLayout from './component/store-page/layout';
import NotFound from './pages/notFound';
function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='signin' element={<AuthSignin />} />
          <Route path='signup' element={<AuthSignup />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='features' element={<AdminFeatures />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProducts />} />
        </Route>
        <Route path='/store' element={<StoreLayout />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
