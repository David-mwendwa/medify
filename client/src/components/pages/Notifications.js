import React from 'react';
import { Tabs } from 'antd';
import Dashboard from './Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  clearNotifications,
  markAsSeen,
} from '../../redux/actions/userActions';

const Notifications = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const markAllAsSeen = async (userId) => {
    dispatch(markAsSeen(userId));
  };

  return (
    <Dashboard>
      <div className='page-title'>Notifications</div>
      <Tabs>
        <Tabs.TabPane tab='Unseen' key={1}>
          <div className='d-flex justify-content-end'>
            <h5
              className='anchor'
              role='button'
              onClick={() => markAllAsSeen(user._id)}>
              Mark all as seen
            </h5>
          </div>
          {user?.unSeenNotifications.map((notification) => (
            <div
              className='card p-2 mb-2'
              onClick={() => navigate(notification.onClickPath)}>
              <div className='card-text'>{notification.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab='seen' key={2}>
          <div className='d-flex justify-content-end'>
            <h5 className='anchor' onClick={() => dispatch(clearNotifications)}>
              Delete all
            </h5>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </Dashboard>
  );
};

export default Notifications;
