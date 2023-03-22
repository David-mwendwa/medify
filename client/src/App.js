import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <Router>
      <Toaster position='top-center' reverseOrder={false} />
      <div>
        <Navbar />
        <div className='my-4'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
