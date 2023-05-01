import { Card } from "@tremor/react";
import TableBuys from "./DashBoardComponents/TableBuys/TableBuys";
import TableUserGames from "./TableUserGames/TableUserGames";
import TableUserReviews from "./TableUserReviews/TableUserReviews";
import UserWalletCoins from "./UserWalletCoins/UserWalletCoins";

const UserDashBoard = () => {
  return (
    <div className="container">
      <TableUserGames />
      <p></p>
      <TableUserReviews />
      <p></p>
      <UserWalletCoins />
      <TableBuys />
    </div>
  );
};

export default UserDashBoard;
