import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Check if jwt token expired
 * @param {*} token token string
 * @returns true/false
 */
const checkTokenExpiration = (token) => {
  const expiry = token && JSON.parse(atob(token.split('.')[1])).exp;
  return expiry && Math.floor(new Date().getTime() / 1000) >= expiry;
};

/**
 * A route component utility for the private resources users
 * @param {*} children protected route component
 * @returns redirect to dashboard if the user is authenticated
 */
const Protected = ({ children }) => {
  const { user, token } = useSelector((state) => state.auth);
  let isAuthorized = false;
  if (token) {
    const tokenExpired = checkTokenExpiration(token);
    isAuthorized = tokenExpired ? false : true;
  } else isAuthorized = !!user?.name;

  console.log('PROTECTED', { user, isAuthorized });
  if (isAuthorized) {
    return children;
  }
  return <Navigate to='/login' replace />;
};
export default Protected;
