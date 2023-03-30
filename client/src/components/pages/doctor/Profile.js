import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDoctorInfo,
  updateDoctor,
  updateDoctorProfile,
} from '../../../redux/actions/userActions';
import { toast } from 'react-hot-toast';
import Dashboard from '../Dashboard';
import DoctorForm from './DoctorForm';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const Profile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { doctor } = useSelector((state) => state.doctor);

  useEffect(() => {
    if (doctor) {
      if (doctor.userId === userId) {
        // set values to the state
      } else dispatch(getDoctorInfo(userId));
    } else dispatch(getDoctorInfo(userId));
  }, [dispatch, doctor, userId]);

  //TODO: timings don't display on the form
  const handleSubmit = (values) => {
    console.log({ values });
    let updateInfo = {
      ...values,
      userId,
      timings: [
        moment(values?.timings[0].format('HH:mm')),
        moment(values?.timings[1].format('HH:mm')),
      ],
    };
    console.log({ userId, updateInfo });
    dispatch(updateDoctorProfile(userId, updateInfo));
    toast.success('updated submitted');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <Dashboard>
      <h1 className='page-title'>Doctor Profile</h1>
      <hr />
      {doctor && (
        <DoctorForm initialValues={doctor} handleSubmit={handleSubmit} />
      )}
    </Dashboard>
  );
};

export default Profile;
