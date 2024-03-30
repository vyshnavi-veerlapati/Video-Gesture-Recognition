import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Mediapipe from './pages/mediapipe';
import Haarcascade from './pages/haarcascade';
import Opencv from './pages/opencv';
import Headers from './components/Headers';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Homed from './pages/Home1'
import Deep from './pages/Deep'
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='/mediapipe' element={<Mediapipe />} />
        <Route path='/haarcascade' element={<Haarcascade />} />
        <Route path='/opencv' element={<Opencv />} />
        <Route path='/home' element={<Home />} />
        <Route path='/homed' element={<Homed />} />
        <Route path='/deep' element={<Deep />} />

        <Route path='*' element={<Error />} />
        
      </Routes>
    </>
  );
}

export default App;