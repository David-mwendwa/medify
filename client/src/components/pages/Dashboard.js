import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className='main p-2'>
      <div className='d-flex layout'>
        <div className='sidebar text-light'>
          <div className='sidebar-header'>
            <h1>MEDIFY</h1>
            <div className='menu'>
              {userMenu.map((menu) => (
                <div
                  className={`d-flex menu-item ${
                    isActive(menu.path) ? 'active-menu-item' : ''
                  }`}>
                  <i className={menu.icon}></i>
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='header'>Header</div>
          <div className='body'>Body</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
