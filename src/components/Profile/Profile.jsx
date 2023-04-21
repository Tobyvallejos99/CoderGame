import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loguinUser } from "../../Redux/actions/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Profile = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // history.push("/Profile");

  const userId = useSelector((state) => state.userId);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loguinUser(user));
    }
  }, [isAuthenticated, user, dispatch]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    console.log(user),
    isAuthenticated && (
      <div className={style.container}>
        <img src={user.picture} alt={user.name} />

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <Link to={"/payment"}>Buy game</Link>
      </div>
    )
  );
};

export default Profile;
