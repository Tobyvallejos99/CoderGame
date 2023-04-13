
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './style.css'

function App() {
  return (
    <div class="fondo">           
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

//https://wallpaperaccess.com/full/7446.jpg
