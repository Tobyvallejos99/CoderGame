import { Title } from '@tremor/react';
import style from './DashBoard.module.css';
import SellerDashBoard from './SellerDashBoard';
import '@tremor/react'

const DashBoard = () => {
    return(
        <div className={style.container}>
            <Title className={style.title}>Dashboard</Title>
            {/* aqui va la card profile
            aqui traer una dhasboard segun tu userRol */}
            <SellerDashBoard />
        </div>
    )
}

export default DashBoard;

