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
import card from "../../Card/card";
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
  return (
    <Card>
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
          {data.map((game) => (
            <TableRow>
              <TableCell>{game.gameName}</TableCell>
              <TableCell>{game.image}</TableCell>
              <TableCell>{game.review} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableUserReviews;
