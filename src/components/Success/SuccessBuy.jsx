import { useNavigate } from 'react-router-dom';
import succesIcon from './success-svgrepo-com.svg';
import style from './SuccessBuy.module.css';
const SuccessBuy = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/')
    }
    return(
        <div className={style.container}>
            <div className={style.box}>
            <h1>Tu compra se ha realizado exitosamente!</h1>
            <div className={style.imgBox}><img src={succesIcon} width='300px' alt="F" /></div>
            </div>
            <button className={style.btn} onClick={handleClick}>Home</button>
        </div>
    )
}

export default SuccessBuy;