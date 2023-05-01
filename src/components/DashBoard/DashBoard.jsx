import { Card, Title } from "@tremor/react";
import style from "./DashBoard.module.css";
import SellerDashBoard from "./SellerDashBoard";
import UserDashBoard from "./UserDashBoard";
import "@tremor/react";
import AdminDashBoard from "./AdminDashBoard";
import NavBar from '../NavBar/NavBar'
import Perfil from "./DashBoardComponents/Perfil/Perfil";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DashBoard = () => {
  const { user } = useAuth0();
  const [ userInfo, setUserInfo] = useState(null)
  
  useEffect(() =>{
    const loadData = async () =>{
        const {data} = await axios(`http://localhost:3001/user/rol/${user.sub}`);
        setUserInfo(data);
    }
    loadData();
},[]);

  return (
    <div >
      <NavBar />
    <div className={style.container}>
      
      <Title className={style.title}>Dashboard</Title>
      
      {/* <Card className={style.lilBox}> */}
        {/* aqui va la card profile
              aqui traer una dhasboard segun tu userRol */}
        <div className={style.cardContainer}>
          <Perfil/>
          {/* {userInfo === 'admin' ? <AdminDashBoard /> : userInfo === 'seller' ? <SellerDashBoard /> : <UserDashBoard />} */}
          <AdminDashBoard/>
        </div>
        {/* <SellerDashBoard /> */}
        {/* <UserDashBoard/> */}
      {/* </Card> */}
    </div>
    </div>
  );
};

export default DashBoard;
