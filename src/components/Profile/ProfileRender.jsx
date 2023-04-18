import React from "react";
import NavBar from "../NavBar/NavBar";
import Profile from "./Profile";
import Logout from "../LoginLogout/Logout";

const ProfileRender = () => {
  return (
    <div>
      <div>
        <NavBar />
        <Profile />
        <Logout />
      </div>
    </div>
  );
};

export default ProfileRender;
