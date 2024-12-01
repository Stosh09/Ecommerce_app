import { Route, Routes } from 'react-router-dom';
import AuthLayout from './component/authentication/authLayout';
import AuthSignin from './pages/Authentication/signin';
import AuthSignup from './pages/Authentication/signup';
function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Authentication</h1>

      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='signin' element={<AuthSignin />} />
          <Route path='signup' element={<AuthSignup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
