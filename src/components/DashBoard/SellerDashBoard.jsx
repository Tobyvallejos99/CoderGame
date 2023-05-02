import { Card } from "@tremor/react";
import GamesComment from "./DashBoardComponents/GamesComment/GamesComment";
import TableGamesToSell from "./DashBoardComponents/TableGamesToSell/TableGamesToSell";
import SellerBalance from "./SellerBalance/SellerBalance";
const SellerDashBoard = () => {
  return (
    <div className="text-center">
      <TableGamesToSell />
      <GamesComment />
      <SellerBalance />
    </div>
  );
};

export default SellerDashBoard;
