import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { logout } from '../../redux/actions/userActions';
import ApplyDoctor from './ApplyDoctor';

const userMenu = [
  { name: 'Home', path: '/dashboard', icon: 'ri-home-3-line' },
  {
    name: 'Appontements',
    path: '/user/appointments',
    icon: 'ri-file-list-3-line',
  },
  { name: 'Book Doctor', path: '/user/book-doctor', icon: 'ri-hospital-line' },
  { name: 'Profile', path: '/user/profile', icon: 'ri-user-3-line' },
];

const adminMenu = [
  { name: 'Home', path: '/dashboard', icon: 'ri-home-3-line' },
  { name: 'Users', path: '/admin/users', icon: 'ri-user-3-line' },
  { name: 'Doctors', path: '/admin/doctors', icon: 'ri-user-star-line' },
];

const doctorMenu = [
  { name: 'Home', path: '/dashboard', icon: 'ri-home-3-line' },
  {
    name: 'Appointments',
    path: '/doctor/appointments',
    icon: 'ri-file-list-3-line',
  },
  { name: 'Profile', path: '/user/profile', icon: 'ri-user-3-line' },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // console.log({ auth });
  const { user, loggedout } = auth;

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logout successful');
    navigate('/');
  };

  // TODO: makes sure this works
  useEffect(() => {
    if (loggedout) {
      console.log({ loggedout });
      navigate('/');
    }
  }, [loggedout, navigate]);

  const menuToRender = /admin/i.test(user?.role)
    ? adminMenu
    : /doctor/i.test(user?.role)
    ? doctorMenu
    : userMenu;

  return (
    <div className='main p-2'>
      <div className='d-flex layout'>
        <div className='sidebar'>
          <div className='sidebar-header'>
            {!collapsed ? (
              <h1>MEDIFY</h1>
            ) : (
              <i
                class='ri-menu-2-line menu-icon'
                onClick={() => setCollapsed(false)}></i>
            )}
            <div className='menu'>
              {menuToRender.map((menu) => (
                <div
                  className={`d-flex menu-item ${
                    isActive(menu.path) ? 'active-menu-item' : ''
                  }`}>
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              ))}
              <div className='d-flex menu-item' onClick={handleLogout}>
                <i className='ri-logout-circle-line'></i>
                <Link to='/user/logout'>Logout</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='header'>
            {!collapsed ? (
              <i
                className='ri-close-fill close-icon'
                onClick={() => setCollapsed(true)}></i>
            ) : (
              <h1 style={{ fontSize: '20px', padding: '10px' }}>MEDIFY</h1>
            )}

            <div className='d-flex align-items-center px-4'>
              <i className='ri-notification-2-line layout-action-icon px-3'></i>
              <Link to='/user/profile'>{user.name}</Link>
            </div>
          </div>
          <div className='body'>{/* <ApplyDoctor /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
