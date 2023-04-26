import carrito from './red-shopping-cart.svg';
import style from './CartBtn.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    const favoritos = useSelector((state) => state.myFavorites)
    return(
        <Link className={style.container}>
            <div className={style.cont}>
                {favoritos.length}
            </div>
            <img className={style.icon} src={carrito} alt="F" />
        </Link>
    )
}

export default CartBtn;