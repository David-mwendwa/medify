import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='my-4'>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
