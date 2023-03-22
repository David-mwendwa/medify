import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/userActions';
import toast from 'react-hot-toast';

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logout successful');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light border'>
        <Link className='navbar-brand' to='/'>
          MEDIFY
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav ml-auto'>
            {currentUser?.name ? (
              <div className='dropdown mt-2'>
                <Link
                  style={{
                    color: 'black',
                    opacity: '.5',
                    textDecoration: 'none',
                  }}
                  className='dropdown-toggle'
                  to=''
                  role='button'
                  id='dropdownMenuLink'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {currentUser.name}
                </Link>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'>
                  {currentUser && currentUser.role === 'admin' && (
                    <Link className='dropdown-item' to='/admin/dashboard'>
                      Dashboard
                    </Link>
                  )}
                  <span
                    role='button'
                    className='dropdown-item'
                    onClick={handleLogout}>
                    Logout
                  </span>
                </div>
              </div>
            ) : (
              <>
                <li className='nav-item active'>
                  <Link className='nav-link' to='/'>
                    Home <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
