import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import FormGames from "./components/FormGames/FormGames";
import "./style.css";
import Detail from "./components/Details/details";

function App() {
  return (
    <div class="fondo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createGame" element={<FormGames />} />
        <Route path="/game/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

//https://wallpaperaccess.com/full/7446.jpg
