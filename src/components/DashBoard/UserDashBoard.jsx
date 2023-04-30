import { Card } from "@tremor/react";
import Perfil from "./DashBoardComponents/Perfil/Perfil";
import TableUserGames from "./TableUserGames/TableUserGames";
import TableUserReviews from "./TableUserReviews/TableUserReviews";
import UserWalletCoins from "./UserWalletCoins/UserWalletCoins";

const UserDashBoard = () => {
  return (
    <Card>
      <Perfil />
      <TableUserGames />
      <TableUserReviews />
      <UserWalletCoins />
    </Card>
  );
};

export default UserDashBoard;
