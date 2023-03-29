import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../../redux/actions/userActions';
import Dashboard from '../Dashboard';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Created At', dataIndex: 'createdAt' },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <div className='d-flex'>
          <Link to='' className='anchor'>
            Block
          </Link>
        </div>
      ),
    },
  ];

  return (
    <Dashboard>
      <h1 className='page-header'>Users List</h1>
      <Table columns={columns} dataSource={users} />
    </Dashboard>
  );
};

export default UsersList;
