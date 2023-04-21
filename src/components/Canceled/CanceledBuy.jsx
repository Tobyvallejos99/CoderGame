import { useNavigate } from 'react-router-dom';
import cancelIcon from './denied-svgrepo-com.svg';
import style from './CanceledBuy.module.css';
const CanceledBuy = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/')
    }
    return(
        <div className={style.container}>
            <div className={style.box}>
            <h1>Tu compra ha sido rechada!</h1>
            <div className={style.imgBox}><img src={cancelIcon} width='300px' alt="F" /></div>
            </div>
            <button className={style.btn} onClick={handleClick}>Home</button>
        </div>
    )
}

export default CanceledBuy;