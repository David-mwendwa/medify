import { Table } from 'antd';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDoctors, updateDoctor } from '../../redux/actions/userActions';
import Dashboard from '../pages/Dashboard';

const DoctorsList = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const approveDoctor = (id) => {
    dispatch(updateDoctor(id, { status: 'approved' }));
    toast.success('Doctor approved');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <h6 className='card-text'>
          {record.firstName} {record.lastName}
        </h6>
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
          {record.status === 'pending' && (
            <Link to='' onClick={() => approveDoctor(record._id)}>
              Approve
            </Link>
          )}
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
