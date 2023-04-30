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

import style from './TableUserReviews.module.css';
import { getVideogames } from "../../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  const dispatch = useDispatch();
  const gamee = useSelector((state) => state.renderedVideogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <Card className={style.container}>
      <Title> My Reviews </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> gameName </TableHeaderCell>
            <TableHeaderCell> image </TableHeaderCell>
            <TableHeaderCell> review </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {gamee.map((game) => (
            <TableRow>
              <TableCell>{game.name}</TableCell>
              <TableCell>
                {" "}
                <img className={style.gameImg} src={game.image} alt="F" />
              </TableCell>
              <TableCell>{game.description} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableUserReviews;
