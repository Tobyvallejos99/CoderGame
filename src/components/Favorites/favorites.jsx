import { connect } from "react-redux";
import Card from '../Card/card';
import Navbar from '../NavBar/NavBar'
import style from './favorites.module.css'
import axios from 'axios';
import { async } from "q";

    function Favorites(props) {
        console.log(props.myFavorites)


        const handleSubmit = async () => {
            await axios.post ('/user/favorites', { idVideogame: props.id, idUser:"7adb453f-e4ce-4351-8afa-3146f9455a25" })
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
            {props.myFavorites.map((elem) => (
            <Card
            name={elem.name}
            released={elem.released}
            price={elem.price}
            image={elem.image}
            description={elem.description}
            id={elem.id}

            />
        ))} 
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