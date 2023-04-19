import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Detail from "./components/Details/details";
import Home from "./components/Home/Home";
import FormGames from "./components/FormGames/FormGames";
import ProfileRender from "./components/Profile/ProfileRender";
// import LoginRender from "./components/Login/LoginRender";
import ShoppingCart from './components/ShoppingCart/shoppingcart'
import { ShoppingCartProvider } from "./components/ShoppingCart/ShoppingCartContext";

function App() {
  return (
  <ShoppingCartProvider>
    <div class="fondo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createGame" element={<FormGames />} />
        <Route path="/game/:id" element={<Detail />} />

        <Route path="/profile" element={<ProfileRender />} />
        {/* <Route path="/login" element={<LoginRender />} /> */}

        <Route path="/cart" element={<ShoppingCart />} />

      </Routes>
    </div>
  </ShoppingCartProvider>  
  );
}

export default App;

//https://wallpaperaccess.com/full/7446.jpg
