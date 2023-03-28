import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDoctors } from '../../redux/actions/userActions';
import Dashboard from '../pages/Dashboard';

const DoctorsList = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <h1 className='card-text'>
          {record.firstName} ${record.lastName}
        </h1>
      ),
    },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Phone', dataIndex: 'phoneNumber' },
    { title: 'Created At', dataIndex: 'createdAt' },
    { title: 'Status', dataIndex: 'status' },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <div className='d-flex'>
          {record.status === 'pending' && <Link to=''>Approve</Link>}
          {record.status === 'approved' && <Link to=''>Block</Link>}
        </div>
      ),
    },
  ];
  return (
    <Dashboard>
      <h1 className='page-header'>Doctors List</h1>
      <Table columns={columns} dataSource={doctors} />
    </Dashboard>
  );
};

export default DoctorsList;
