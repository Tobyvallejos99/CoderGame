import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../LoginLogout/Login";
import style from "./navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../ShoppingCart/ShoppingCartContext";
import { useEffect, useState } from "react";
import axios from "axios";
export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  const [cart, setCart] = useContext(CartContext);
  const { user } = useAuth0();
  const [rolUser, setRolUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios(
        `http://localhost:3001/user/bytransaction/${user?.sub}`
      );
      setRolUser(data);
    };
    loadData();
  }, [user?.sub]);

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

          <Link to={"/videogames"} className="btn btn-outline-danger">
            🎮 ALL Games
          </Link>
          {rolUser?.rol === "seller" &&
            (isAuthenticated ? (
              <>
                <Link className="btn btn-outline-danger" to="/createGame">
                  Sell
                </Link>
              </>
            ) : (
              <></>
            ))}

          <Link to={"/favorites"} className="btn btn-outline-danger">
            🛒
          </Link>

          {/* <Link class="btn btn-outline-danger" to="/">
            Profile
          </Link> */}

          {isAuthenticated ? (
            <>
              <Link
                className="btn btn-outline-danger"
                to={"/profile/" + user?.sub}
              >
                Profile
              </Link>
            </>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </nav>
  );
}
