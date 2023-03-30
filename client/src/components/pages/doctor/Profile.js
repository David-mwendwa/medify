import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor, updateDoctor } from '../../../redux/actions/userActions';
import { toast } from 'react-hot-toast';
import Dashboard from '../Dashboard';
import DoctorForm from './DoctorForm';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctor(userId));
  }, [dispatch, userId]);

  const handleSubmit = (values) => {
    dispatch(updateDoctor(values));
    toast.success('updated submitted');
  };

  return (
    <Dashboard>
      <h1 className='page-title'>Doctor Profile</h1>
      <hr />
      <DoctorForm handleSubmit={handleSubmit} />
    </Dashboard>
  );
};

export default Profile;
