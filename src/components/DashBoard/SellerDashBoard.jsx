import { Card } from "@tremor/react";
import GamesComment from "./DashBoardComponents/GamesComment/GamesComment";
import TableGamesToSell from "./DashBoardComponents/TableGamesToSell/TableGamesToSell";

const SellerDashBoard = () => {
  return (
    <Card>
      <TableGamesToSell />
      <GamesComment />
    </Card>
  );
};

export default SellerDashBoard;
