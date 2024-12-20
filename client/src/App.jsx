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
import NotFound from './pages/notFound/notFound';
import StoreHome from './pages/Store-page/homePage';
import Storeshelf from './pages/Store-page/shelf';
import StoreAccount from './pages/Store-page/account';
import Storecheckout from './pages/Store-page/checkout';
import CheckAuth from './component/Common/checkAuth';
import UnauthPage from './pages/Unauthorized/notAuth';
function App() {
  const isAuthenticated = true;
  const user = {
    name: 'John Doe',
    role: 'user',
  };
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route
          path='/auth'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path='signin' element={<AuthSignin />} />
          <Route path='signup' element={<AuthSignup />} />
        </Route>
        <Route
          path='/admin'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='features' element={<AdminFeatures />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProducts />} />
        </Route>
        <Route
          path='/store'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <StoreLayout />
            </CheckAuth>
          }
        >
          <Route path='home' element={<StoreHome />} />
          <Route path='shelf' element={<Storeshelf />} />
          <Route path='account' element={<StoreAccount />} />
          <Route path='checkout' element={<Storecheckout />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/unauth-page' element={<UnauthPage />} />
      </Routes>
    </div>
  );
}

export default App;
