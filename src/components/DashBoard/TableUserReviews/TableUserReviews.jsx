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
import style from "./TableUserReviews.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
const data = [
  {
    id: 1,
    gameName: "Mario Bros",
    image: "pepito",
    review:
      "todo muy Bonito pero no tienen todo lo que necesito para poder desenvolverme en mi dia a dia.tambein me gustaria aclarar que estoy muy enojada",
  },
  {
    id: 2,
    gameName: "Mario Bros",
    image: "pepito",
    review:
      "todo muy Bonito pero no tienen todo lo que necesito para poder desenvolverme en mi dia a dia.tambein me gustaria aclarar que estoy muy enojada",
  },
  {
    id: 3,
    gameName: "Mario Bros",
    image: "pepito",
    review:
      "todo muy Bonito pero no tienen todo lo que necesito para poder desenvolverme en mi dia a dia.tambein me gustaria aclarar que estoy muy enojada",
  },
];
const TableUserReviews = () => {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios(
        `http://localhost:3001/user/buyer/${user.sub}`
      );
      setUserInfo(data);
    };
    loadData();
  }, [user.sub]);

  const commentsGame = userInfo?.comments || [];

  return (
    <Card className={style.container}>
      <Title>
        {" "}
        <h1> My Reviews </h1>
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> Game </TableHeaderCell>
            <TableHeaderCell> review </TableHeaderCell>
            <TableHeaderCell> delete </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {commentsGame.map((game) => (
            <TableRow>
              <TableCell>{game.Videogame.name}</TableCell>
              <TableCell> {game.message}</TableCell>
              <TableCell>
                {" "}
                <Link to={game.deleted}> Delete</Link>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableUserReviews;
