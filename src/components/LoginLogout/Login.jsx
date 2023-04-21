import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios'

const Login = () => {
  const { user, isAuthenticated ,loginWithRedirect } = useAuth0();

  return( <div>
  <button onClick={() => {loginWithRedirect()}}>Log In</button>
  </div>
  );
};

export default Login;
