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
import Dashboard from './components/pages/Dashboard_';

function App() {
  return (
    <Router>
      <Toaster position='top-center' reverseOrder={false} />
      <Public>
        <Navbar />
      </Public>
      <div className=''>
        <Routes>
          <Route path='/' element={<Landing />} />
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
        </Routes>
      </>
    </Router>
  );
}

export default App;
