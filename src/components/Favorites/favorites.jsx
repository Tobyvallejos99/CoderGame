import { connect } from "react-redux";
import Card from '../Card/card';
import Navbar from '../NavBar/NavBar'

    function Favorites(props) {
        console.log(props.myFavorites)

        return (
        <div>
            <Navbar />
            {props.myFavorites.map((elem) => (
            <Card
            name={elem.name}
            released={elem.released}
            price={elem.price}
            image={elem.image}
            id={elem.id}
            />
        ))}
        </div>
    );
}

export function mapStateToProps(state){
    return {
        myFavorites:state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites)