import React from "react";
import NavBar from "../NavBar/NavBar";
import Profile from "./Profile";
import Logout from "../LoginLogout/Logout";
import style from "./ProfileRender.module.css";

const ProfileRender = () => {
  return (
    <div className={style.container}>
      <div>
        <NavBar />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default ProfileRender;
