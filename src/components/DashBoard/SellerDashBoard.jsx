import { Card } from "@tremor/react";
import TableGamesToSell from "./DashBoardComponents/TableGamesToSell/TableGamesToSell";
import SellerBalance from "./SellerBalance/SellerBalance";
import DonutSeller from "./DonutSeller/DonutSeller";
const SellerDashBoard = () => {
  return (
    <div className="text-center">
      <TableGamesToSell />
      <SellerBalance />
      <DonutSeller />
    </div>
  );
};

export default SellerDashBoard;
