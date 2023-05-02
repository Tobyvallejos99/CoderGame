import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../Card/card.module.css";
import { connect, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../../Redux/actions/actions";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../LoginLogout/Login";


function Card({
  name,
  image,
  released,
  price,
  description,
  id,
  deleteFav,
  addFav,
  onclose,
  myFavorites,
  favorites,
  promotions,
}) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [isfav, setIsFav] = useState(false);
  // const user = useSelector((state) => state.userId)

  const handleFavorite = async () => {
    if (isfav) {
      setIsFav(false);
      deleteFav(id);
      try {
        await axios.delete("http://localhost:3001/user/favorites", {
          data: { idVideogame: id, idUser: user.sub },
        });
        console.log("Game deleted successfully!");
        // Aquí podrías mostrar un mensaje de éxito al usuario, por ejemplo
      } catch (error) {
        console.error("Error deleting game:", error);
        // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo
      }
    } else {
      setIsFav(true);
      addFav({ name, image, description, released, price, id });
      try {
        await axios.post("http://localhost:3001/user/favorites", {
          idVideogame: id,
          idUser: user.sub,
        });
        console.log("Game added successfully!");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={style.minibox}>
      <div className={style.title_container}>
        <h1 className={style.title}>{name}</h1>
      </div>
      <Link className={style.minibox2} to={"/game/" + id}>
        <div className={style.containerizquierda}>
          <img
            className="rounded"
            src={image}
            alt={name}
            width="150px"
            height="85px"
          />
          <p>{released}</p>
        </div>
        <div>
          <p>Description:</p>
          {description.length > 100
            ? description.slice(0, 100) + " ...For more press!"
            : description}
        </div>
      </Link>
      <div className={style.containerderecha}>
        {favorites[0]?.buy?(<h1>Bought</h1>):(isfav ? (
          <button onClick={handleFavorite}>
            <p> ❌ REMOVE</p>
          </button>
        ) : (
          <button onClick={handleFavorite}>🛒 +ADD To Cart</button>
        ))}

        <p className={style.price}>${price} </p>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (game) => {
      dispatch(addFav(game));
    },
    deleteFav: (id) => {
      dispatch(deleteFav(id));
    },
  };
};
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  { addFav, deleteFav }
)(Card);
