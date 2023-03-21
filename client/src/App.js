import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
