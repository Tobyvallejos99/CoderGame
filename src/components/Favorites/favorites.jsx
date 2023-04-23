import { connect } from "react-redux";
import Card from '../Card/card';
import Navbar from '../NavBar/NavBar'
import style from './favorites.module.css'
import axios from 'axios';
import { async } from "q";
import { useSelector } from "react-redux";

    function Favorites(props) {
        console.log(props.myFavorites)

        const user = useSelector((state) => state.sub);
        const handleSubmit = async () => {
             console.log(user)
            await axios.post ('/user/favorites', { idVideogame: props.id, idUser:user })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            };

        return (
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
            id={elem.id}></Card>
        )
        )} 
        <button onClick={handleSubmit}>COMPRAR</button>
        </div>
    );
}

export function mapStateToProps(state){
    return {
        myFavorites:state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites)