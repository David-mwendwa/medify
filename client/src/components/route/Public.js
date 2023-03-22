import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * A route component utility for the public
 * @param {*} children private route component
 * @returns redirect to homepage/landing page if the user is not authenticated
 */
const Public = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const isAuthorized = !!user?.name;
  console.log('PUBLIC', { user, isAuthorized });

  if (!isAuthorized) {
    return children;
  }
  // if already authenticated redirect to dashboard
  return <Navigate to='/dashboard' replace />;
};
export default Public;
