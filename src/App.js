import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Detail from "./components/Details/details";
import Home from "./components/Home/Home";
import FormGames from "./components/FormGames/FormGames";
import ProfileRender from "./components/ProfileRender/ProfileRender";
// import LoginRender from "./components/Login/LoginRender";
import { ShoppingCartProvider } from "./components/ShoppingCart/ShoppingCartContext";
import CoinBuyer from "./components/CoinBuyer/CoinBuyer";
import SuccessBuy from "./components/Success/SuccessBuy";
import CanceledBuy from "./components/Canceled/CanceledBuy";
import Favorites from "./components/Favorites/favorites";
import VideoGames from "./components/VideoGames/videogames";
import DashBoard from "./components/DashBoard/DashBoard";

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

          <Route path="/payment" element={<CoinBuyer />} />

          <Route path="/success" element={<SuccessBuy />} />

          <Route path="/canceled" element={<CanceledBuy />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/videogames" element={<VideoGames />} />

          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;

//https://wallpaperaccess.com/full/7446.jpg
