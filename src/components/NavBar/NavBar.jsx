import React from "react";
import { Link } from "react-router-dom";
import Login from "../LoginLogout/Login";
import style from "./navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav>
      <div className={style.navbar}>
        <img
          src="https://cdn.discordapp.com/attachments/509143549787504665/1096068638957649962/CoderGame.png"
          alt="codergame"
          width="250px"
          height="70px"
        />
        <div className={style.navbar__options}>
          <Link className="btn btn-outline-danger" to="/">
            Home
          </Link>
          <Link className="btn btn-outline-danger" to="/createGame">
            Sell
          </Link>
          {/* <Link class="btn btn-outline-danger" to="/">
            Profile
          </Link> */}
          {isAuthenticated ? (
            <>
              <Link className="btn btn-outline-danger" to="/profile">
                Profile
              </Link>
            </>
          ) : (
            <Login />
          )}

          {/* </Link> */}
          <Link className="btn btn-outline-danger" to="/cart">
            🛒
          </Link>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
