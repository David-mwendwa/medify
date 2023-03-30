import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Row, Input, TimePicker, Button } from 'antd';
import Dashboard from './Dashboard';
import { applyDoctor } from '../../redux/actions/userActions';
import { toast } from 'react-hot-toast';
import DoctorForm from './doctor/DoctorForm';

const ApplyDoctor = () => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);
  const handleSubmit = (values) => {
    dispatch(applyDoctor(values));
    toast.success('Doctor application submitted');
  };

  return (
    <Dashboard>
      <h1 className='page-title'>Apply Doctor</h1>
      <hr />

      <DoctorForm handleSubmit={handleSubmit} />
    </Dashboard>
  );
};

export default ApplyDoctor;
