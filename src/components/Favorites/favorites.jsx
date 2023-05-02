import { connect, useSelector } from "react-redux";
import Card from "../Card/card";
import Navbar from "../NavBar/NavBar";
import style from "./favorites.module.css";
import axios from "axios";
import Login from "../LoginLogout/Login";
import { Link } from "react-router-dom";
// import { async } from "q";
import { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

function Favorites(props) {
  const [arrFav, setArrFav] = useState([]);
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getFav = async () => {
      console.log(user.sub);
      const fav = await axios.get(
        `http://localhost:3001/user/favorites/${user.sub}`
      );
      setArrFav(fav.data.listFavorites);
      setBalance(fav.data.balance.balance);
      setTotal(fav.data.total);
      return fav;
    };
    getFav();
  }, [user, total]);

  const handleSubmit = async () => {
    const idVideogames = arrFav.map((fav) => fav.id);
    console.log(idVideogames);
    try {
      const response = await axios.post("http://localhost:3001/checkout/buy", {
        idVideogame: idVideogames,
        idUser: user.sub,
      });
      window.alert(response.data);
      setArrFav([]);
    } catch (error) {
      window.alert(error.response.data);
    }
  };
  const handledelete = async () => {
    try {
      for (const elem of props.myFavorites) {
        const { id } = elem;
        await axios.delete("http://localhost:3001/user/favorites", {
          data: { idVideogame: id, idUser: user.sub },
        });
      }

      // Aquí podrías mostrar un mensaje de éxito al usuario, por ejemplo
    } catch (error) {
      console.error("Error delete cart:", error);
      // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo
    }
  };

  return (
    <div className="text-center">
      <div className={style.fondo2}>
        <Navbar />
        <p></p>
        {arrFav.map((elem) => (
          <Card
            name={elem.name}
            released={elem.released}
            price={elem.price}
            image={elem.image}
            description={elem.description}
            id={elem.id}
          ></Card>
        ))}
        {isAuthenticated ? (
          arrFav.length ? (
            <>
              <button className="btn btn-danger" onClick={handleSubmit}>
                Complete purchase
              </button>
            </>
          ) : (
            <Link to={"/videogames"} className="btn btn-outline-danger">
              🎮 Add games to cart
            </Link>
          )
        ) : (
          <div className={style.conditionalDiv}>
            <h4>Para continuar debes loguearte</h4>
            <Login />
          </div>
        )}
        <p></p>
        {/* <button className="btn btn-danger" onClick={handledelete}>
                    Delete Cart
                  </button> */}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
    idUser: state.idUser,
  };
}

export default connect(mapStateToProps)(Favorites);
