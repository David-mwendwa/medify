import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const userMenu = [
  { name: 'Home', path: '/dashboard', icon: 'ri-home-3-line' },
  {
    name: 'Appontements',
    path: '/user/appointments',
    icon: 'ri-file-list-3-line',
  },
  { name: 'Book Doctor', path: '/user/book-doctor', icon: 'ri-hospital-line' },
  { name: 'Profile', path: '/user/profile', icon: 'ri-user-3-line' },
  { name: 'Logout', path: '/user/logout', icon: 'ri-logout-circle-line' },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const { user } = useSelector((state) => state.auth);

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
              {userMenu.map((menu) => (
                <div
                  className={`d-flex menu-item ${
                    isActive(menu.path) ? 'active-menu-item' : ''
                  }`}>
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              ))}
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
          <div className='body'>Body</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
