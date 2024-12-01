import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes('/signin') ||
      location.pathname.includes('/signup')
    )
  ) {
    return <Navigate to='/auth/signin' />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes('/signin') ||
      location.pathname.includes('/signup'))
  ) {
    if (user?.role === 'admin') {
      return <Navigate to='/admin/dashboard' />;
    } else {
      return <Navigate to='/store/home' />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== 'admin' &&
    location.pathname.includes('/admin')
  ) {
    return <Navigate to='/unauth-page' />;
  }

  if (
    isAuthenticated &&
    user?.role === 'admin' &&
    location.pathname.includes('/store')
  ) {
    return <Navigate to='/admin/dashboard' />;
  }

  return <>{children}</>;
}
CheckAuth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    role: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default CheckAuth;
