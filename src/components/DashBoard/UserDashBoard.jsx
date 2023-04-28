import { Card } from "@tremor/react";
import TableUserGames from "./TableUserGames/TableUserGames";
import TableUserReviews from "./TableUserReviews/TableUserReviews";

const SellerDashBoard = () => {
  return (
    <Card>
      <TableUserGames />
      <TableUserReviews />
    </Card>
  );
};

export default SellerDashBoard;
