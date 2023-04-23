import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from '../Card/card.module.css'
import { connect, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../../Redux/actions/actions";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../LoginLogout/Login";


function Card ({ name,image,released, price, description, id,deleteFav,addFav, onclose, myFavorites }) {

    const dispatch = useDispatch();
    const { user, isAuthenticated } = useAuth0();

    const [isfav,setIsFav] = useState(false);
    // const user = useSelector((state) => state.userId)
    
    const handleFavorite = async () => {
        if (isfav) {
            setIsFav(false);
            deleteFav(id);
        
            try {
                await axios.delete(
                `http://localhost:3001/user/favorites/${user.sub}/${id}`,{
                    idVideogame: id,
                    idUser: user.sub,
                    }
                );
            } catch (error) {
                console.error(error);
            }
            } else {
            setIsFav(true);
            addFav({ name, image, description, released, price, id });
            try {
                await axios.post("http://localhost:3001/user/favorites", {
                idVideogame: id,
                idUser: user.sub,
                });
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
        <Link className={style.minibox2} to={'/game/'+id}>
            <div className={style.containerizquierda}>
                <h2 className={style.title}>{name} </h2>
                <img src={image} alt={name} width='150px' height="85px" />
                <p>{released}</p>
            </div>
            <div>
                <p>Description:</p> 
            {description.length > 100 ? description.slice(0, 100) + " ...For more press!" : description}
            </div>

        </Link>

            <div className={style.containerderecha}>
            {isfav ? (
                <button  onClick={handleFavorite}>✅<p> In the cart  </p></button>
                ) : (
                <button onClick={handleFavorite}>🛒${price}</button>
                )}</div>
        </div>
        <div>
          <p>Description:</p>
          {description.length > 100
            ? description.slice(0, 100) + " ...For more press!"
            : description}
        </div>
      </Link>

      <div className={style.containerderecha}>
        {isAuthenticated ? (
          isfav ? (
            <button onClick={handleFavorite}>
              ✅<p> In the cart </p>
            </button>
          ) : (
            <button onClick={handleFavorite}>🛒${price}</button>
          )
        ) : isfav ? (
          <Link>
            {" "}
            <Login />{" "}
          </Link>
        ) : (
          <button onClick={handleFavorite}>🛒${price}</button>
        )}
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
