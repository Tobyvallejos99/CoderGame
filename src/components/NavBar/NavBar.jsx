import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../LoginLogout/Login";
import style from "./navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../ShoppingCart/ShoppingCartContext";

export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
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
          <Link to={"/cart"} className="btn btn-outline-danger" >
            <li>Cart: <span className="btn btn-danger">{quantity}</span></li>
          </Link>

          {isAuthenticated ? (
            <>
              <Link className="btn btn-outline-danger" to="/profile">
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
