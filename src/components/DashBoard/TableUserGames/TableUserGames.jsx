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

const data = [
  {
    id: 1,
    name: "Mario Bros",
    image: "imageFile",
    gameLink: "https://www.youtube.com/watch?v=IUjbxb6816Y",
  },
  {
    id: 3,
    name: "Mario Bros",
    image: "imageFile",
    gameLink: "https://www.youtube.com/watch?v=IUjbxb6816Y",
  },
  {
    id: 2,
    name: "Mario Bros",
    image: "imageFile",
    gameLink: "https://www.youtube.com/watch?v=IUjbxb6816Y",
  },
];

const TableUserGames = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.dataMasterUser);
  console.log(allData);
  const { user, isAuthenticated } = useAuth0();

  const userMaster = (user) => {
    return async (dispatch) => {
      try {
        console.log(user, "holaaaa");
        const response = await axios.get(
          `http://localhost:3001/user/buyer/${user.sub}`
        );

        console.log(response);
        dispatch({ type: USER_MASTER, payload: response.data });
      } catch (error) {
        return window.alert(
          "No se pudo hacer el pedido de videojuegos comprados  al servidor"
        );
      }
    };
  };

  // useEffect(() => {
  //   dispatch(userMaster());
  // });

  return (
    <Card>
      <Title> My Games </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> Image </TableHeaderCell>
            <TableHeaderCell> Name </TableHeaderCell>
            <TableHeaderCell> Detail </TableHeaderCell>
            <TableHeaderCell> GameLink </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((game) => (
            <TableRow>
              <TableCell>{game.image}</TableCell>
              <TableCell>{game.name}</TableCell>
              <TableCell>{game.id}</TableCell>
              <TableCell>
                <Link to={game.gameLink}>Go to game</Link>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableUserGames;
