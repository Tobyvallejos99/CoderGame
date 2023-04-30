import { Card } from "@tremor/react";
import TableUserGames from "./TableUserGames/TableUserGames";
import TableUserReviews from "./TableUserReviews/TableUserReviews";
import UserWalletCoins from "./UserWalletCoins/UserWalletCoins";

const UserDashBoard = () => {
  return (
    <Card>
      <TableUserGames />
      <TableUserReviews />
      <UserWalletCoins />
    </Card>
  );
};

export default UserDashBoard;
