import { Card, Title } from "@tremor/react";
import style from "./DashBoard.module.css";
import SellerDashBoard from "./SellerDashBoard";
import UserDashBoard from "./UserDashBoard";
import "@tremor/react";
import AdminDashBoard from "./AdminDashBoard";
import NavBar from "../NavBar/NavBar";
import Perfil from "./DashBoardComponents/Perfil/Perfil";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DashBoard = () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios(`/user/rol/${user.sub}`);
      setUserInfo(data);
    };
    loadData();
  }, []);
  return (
    <>
      <NavBar />
      <div className={style.container}>
        <Title className={style.title}>Dashboard</Title>

        {/* aqui va la card profile
              aqui traer una dhasboard segun tu userRol */}
        {userInfo?.rol === "admin" ? (
          <div className={style.cardContainer}>
            <Perfil />
            <AdminDashBoard />
          </div>
        ) : userInfo?.rol === "seller" ? (
          <div className={style.cardContainer}>
            <Perfil />
            <SellerDashBoard />
          </div>
        ) : (
          <div className={style.cardContainer}>
            <Perfil />
            <UserDashBoard />
          </div>
        )}

        {/* <Perfil />
        <AdminDashBoard/> */}
        {/* <SellerDashBoard /> */}
        {/* <UserDashBoard/> */}
      </div>
    </>
  );
};

export default DashBoard;
