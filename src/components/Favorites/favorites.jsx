import { connect, useSelector } from "react-redux";
import Card from '../Card/card';
import Navbar from '../NavBar/NavBar'
import style from './favorites.module.css'
import axios from 'axios';
import { addFav } from "../../Redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";

function Favorites(props) {
    const { user,} = useAuth0();

  const handleSubmit = async () => {
    try {
      for (const elem of props.myFavorites) {
        const { id } = elem;
        await axios.post("http://localhost:3001/user/favorites", {
          idVideogame: id,
          idUser: user.sub,
        });
      }
      console.log("Cart submitted successfully!");
      // Aquí podrías mostrar un mensaje de éxito al usuario, por ejemplo
    } catch (error) {
      console.error("Error submitting cart:", error);
      // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo
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
      console.log("Cart delete successfully!");
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
        {props.myFavorites.map((elem) => (
          <Card
            name={elem.name}
            released={elem.released}
            price={elem.price}
            image={elem.image}
            description={elem.description}
            id={elem.id}
          ></Card>
        ))}
        <button className="btn btn-danger" onClick={handleSubmit}>
          Confirm Cart
        </button>
        <button className="btn btn-danger" onClick={handledelete}>
          delete
        </button>
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
