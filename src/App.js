import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointments/Appointment';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
