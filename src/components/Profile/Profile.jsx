import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css";

// import { useHistory } from "react-router-dom";

const Profile = () => {
  // const history = useHistory();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  // history.push("/Profile");

  return (
    console.log(user),
    isAuthenticated && (
      <div className={style.container}>
        <img src={user.picture} alt={user.name} />

        <h2>{user.name}</h2>

        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
