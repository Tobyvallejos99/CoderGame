import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import style from '../Card/card.module.css'
import { connect } from "react-redux";
import { addFav, deleteFav } from "../../Redux/actions/actions";

function Card ({ name,image,released, price, description, id,deleteFav,addFav, onclose, myFavorites }) {

    const [isfav,setIsFav] = useState(false);

    const handleFavorite =()=>{
        if(isfav){
            setIsFav(false);
            deleteFav(id);
        }
        else {
            setIsFav(true);
            addFav({name,image,released, price, id})
        }
    }

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
            </div>
        </Link>

            {/* <div className= {style.containerderecha} to={'/cart/'+id}>
            </div> */}

            <div className={style.containerderecha}>
            {isfav ? (
                <button  onClick={handleFavorite}>✅<p> In the cart  </p></button>
                ) : (
                <button onClick={handleFavorite}>🛒${price}</button>
                )}</div>
        </div>


    )
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addFav:(game)=>{dispatch(addFav(game))},
        deleteFav:(id)=>{dispatch(deleteFav(id))}
    }
}

export function mapStateToProps(state){
    return {
        myFavorites:state.myFavorites,
    }
}



export default connect(
    mapStateToProps,
    // mapDispatchToProps,
    {addFav,deleteFav}
)(Card);