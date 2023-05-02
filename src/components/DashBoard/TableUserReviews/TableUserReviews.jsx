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

  const handleDeleteReview = async (id) => {
    await axios.delete(`http://localhost:3001/comment`, {
      data: {
        sub: user.sub,
        id,
      },
    });

    const updatedCommentsGame = userInfo.comments.filter(
      (game) => game.id !== id
    );
    setUserInfo({ ...userInfo, comments: updatedCommentsGame });
  };

  const commentsGame = userInfo?.comments || [];

  return (
    <Card className="container rounded bg-danger">
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
                <button onClick={() => handleDeleteReview(game.id)}>
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableUserReviews;
