import { Card } from "@tremor/react";
import TableBuys from "./DashBoardComponents/TableBuys/TableBuys";
import TableUserGames from "./TableUserGames/TableUserGames";
import TableUserReviews from "./TableUserReviews/TableUserReviews";

const UserDashBoard = () => {
  return (
    <div className="container">
      <TableUserGames />
      <p></p>
      <TableUserReviews />
      <p></p>
      <TableBuys />
    </div>
  );
};

export default UserDashBoard;
