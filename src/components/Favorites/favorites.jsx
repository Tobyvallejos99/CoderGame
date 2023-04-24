import { connect, useSelector } from "react-redux";
import Card from '../Card/card';
import Navbar from '../NavBar/NavBar'
import style from './favorites.module.css'
import axios from 'axios';
// import { async } from "q";
import { useEffect, useState } from "react"

import { useAuth0 } from "@auth0/auth0-react";

function Favorites(props) {
    const [arrFav, setArrFav] = useState([]) 
    const [balance, setBalance] = useState(0)
    const [total, setTotal] = useState(0)

    const { user, isAuthenticated } = useAuth0();

    useEffect(()=>{
        const getFav = async ()=>{
            console.log(user.sub)
            const fav = await axios.get(`http://localhost:3001/user/favorites/${user.sub}`)
            setArrFav(fav.data.listFavorites)
            setBalance(fav.data.balance.balance)
            setTotal(fav.data.total)
            return fav
        }
        getFav()
        

    },[user,total])

        const handleSubmit = async () => {
            const idVideogames = arrFav.map(fav =>fav.id)
            console.log(idVideogames)
            try {
                const response = await axios.post ('http://localhost:3001/checkout/buy', { idVideogame: idVideogames, idUser:user.sub })
                window.alert(response.data)
                setArrFav([])
            } catch (error) {
                window.alert(error.response.data)
            }
            
            };

        return (
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
        <button className="btn btn-danger" onClick={handleSubmit}>
          Confirm Cart
        </button>
        {/* <button className="btn btn-danger" onClick={handledelete}>
          delete
        </button> */}
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
