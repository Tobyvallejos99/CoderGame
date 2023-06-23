import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  text,
  Title,
  Badge,
} from "@tremor/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { userMaster } from "../../../Redux/actions/actions";
import { USER_MASTER } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./TableUserGames.module.css";

const TableUserGames = () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios(`/user/buyer/${user?.sub}`);
      setUserInfo(data);
    };
    loadData();
  }, [user?.sub]);

  const fav = userInfo?.favorites || [];

  return (
    <div class="d-flex">
      <div className={style.minibox}>
        <Title>
          {" "}
          <h1> My Games </h1>
        </Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell> Image </TableHeaderCell>
              <TableHeaderCell> Name </TableHeaderCell>
              <TableHeaderCell> Detail </TableHeaderCell>
              <TableHeaderCell> Play </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {fav?.map((game) => (
              <TableRow>
                <TableCell className="border p-2">
                  {" "}
                  <img
                    className={style.imagee}
                    src={game.Videogame.image}
                    alt="F"
                  />
                </TableCell>
                <TableCell className="border p-2">
                  {game.Videogame.name}
                </TableCell>
                <TableCell className="border p-2">
                  {" "}
                  <Link
                    className="btn btn-dark"
                    to={"/game/" + game.VideogameId}
                  >
                    {" "}
                    About{" "}
                  </Link>{" "}
                </TableCell>

                <TableCell className="border p-2">
                  <Link className="btn btn-dark" to={game.Videogame.gameLink}>
                    Play
                  </Link>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableUserGames;
