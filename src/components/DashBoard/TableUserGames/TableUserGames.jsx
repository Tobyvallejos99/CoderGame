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
import card from "../../Card/card";

const data = [
  {
    id: 1,
    name: "Mario Bros",
    image: "imageFile",
    gameLink: "pepito",
  },
  {
    id: 3,
    name: "Mario Bros",
    image: "imageFile",
    gameLink: "pepito2",
  },
  {
    id: 2,
    name: "Mario Bros",
    image: "imageFile",
    gameLink: "pepito3",
  },
];

const TableUserGames = () => {
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
              <TableCell>{game.gameLink} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableUserGames;
