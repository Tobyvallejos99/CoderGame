import { Card } from "@tremor/react";
import TableBuys from "./DashBoardComponents/TableBuys/TableBuys";
import TableUserGames from "./TableUserGames/TableUserGames";
import TableUserReviews from "./TableUserReviews/TableUserReviews";
import UserWalletCoins from "./UserWalletCoins/UserWalletCoins";

const UserDashBoard = () => {
  return (
    <Card>
      <TableBuys />
      <TableUserGames />
      <TableUserReviews />
      <UserWalletCoins />
    </Card>
  );
};

export default UserDashBoard;
