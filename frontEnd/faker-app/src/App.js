import MainPage from './components/MainPage/index';
import Login from "./components/Login/index"
import './App.css';
import Registration from './components/Registration';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/main' element={<Protected><MainPage/></Protected>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
