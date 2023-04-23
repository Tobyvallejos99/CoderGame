import { connect, useSelector } from "react-redux";
import Card from '../Card/card';
import Navbar from '../NavBar/NavBar'
import style from './favorites.module.css'
import axios from 'axios';

    function Favorites(props) {
        const user = useSelector((state) => state.idUser)
        console.log(props.myFavorites)


        const handleSubmit = async () => {
            await axios.post ('/user/favorites', { idVideogame: props.id, user })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
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
            id={elem.id}></Card>
        )
        )} 
        <button  className="btn btn-danger" onClick={handleSubmit}>COMPRAR</button>

        </div>
        </div>
    );
}

export function mapStateToProps(state){
    return {
        myFavorites:state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites)