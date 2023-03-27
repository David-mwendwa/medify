import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/userActions';
import Dashboard from '../pages/Dashboard';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <Dashboard>{JSON.stringify(users)}</Dashboard>;
};

export default UsersList;
