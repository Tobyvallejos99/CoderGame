import { Card } from "@tremor/react";
import GamesComment from "./DashBoardComponents/GamesComment/GamesComment";
import TableGamesToSell from "./DashBoardComponents/TableGamesToSell/TableGamesToSell";

const SellerDashBoard = () => {
  return (
    <div className="text-center">
      <TableGamesToSell />
      <GamesComment />
    </div>
  );
};

export default SellerDashBoard;
