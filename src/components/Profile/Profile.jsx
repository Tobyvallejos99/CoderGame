import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postUser, loguinUser } from "../../Redux/actions/actions";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const userId = useSelector((state) => state.userId);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(postUser(user.email, user.name));
      dispatch(loguinUser(user));
      console.log(userId);
    }
  }, [isAuthenticated, user, dispatch]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
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
