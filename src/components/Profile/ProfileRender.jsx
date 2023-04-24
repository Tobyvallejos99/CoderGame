import React from "react";
import NavBar from "../NavBar/NavBar";
import Profile from "./Profile";
import Logout from "../LoginLogout/Logout";
import style from "./ProfileRender.module.css";

const ProfileRender = () => {
  return (
    <div className={style.fondo2}>
      <div >
        <NavBar />
      </div>
      <div className="container">
        <div className={style.Card_Box}>
        <Profile />
       
      <div className="text-center">
        <Logout />
      </div>
    </div> 
    </div>
    </div>
  );
};

export default ProfileRender;
