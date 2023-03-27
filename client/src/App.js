/* eslint-disable no-unused-vars */
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from './components/pages/Landing';
import Navbar from './components/layout/Navbar';
import Protected from './components/route/Protected';
import Public from './components/route/Public';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Dashboard from './components/pages/Dashboard';
import ApplyDoctor from './components/pages/ApplyDoctor';
import Notifications from './components/pages/Notifications';
import Appointments from './components/pages/Appointments';
import Profile from './components/pages/Profile';
import UsersList from './components/admin/UsersList';
import DoctorsList from './components/admin/DoctorsList';

function App() {
  return (
    <Router>
      <Toaster position='top-center' reverseOrder={false} />
      <div className=''>
        <Routes>
          <Route
            path='/'
            element={
              <Public>
                <Landing />
              </Public>
            }
          />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <>
        <Routes>
          <Route
            path='/dashboard'
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path='/user/apply-doctor'
            element={
              <Protected>
                <ApplyDoctor />
              </Protected>
            }
          />
          <Route
            path='/user/notifications'
            element={
              <Protected>
                <Notifications />
              </Protected>
            }
          />
          <Route
            path='/user/appointments'
            element={
              <Protected>
                <Appointments />
              </Protected>
            }
          />
          <Route
            path='/user/profile'
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path='/admin/users'
            element={
              <Protected>
                <UsersList />
              </Protected>
            }
          />
          <Route
            path='/admin/doctors'
            element={
              <Protected>
                <DoctorsList />
              </Protected>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
