import { Card } from "@tremor/react";
import TableBuys from "./DashBoardComponents/TableBuys/TableBuys";
import TableUserGames from "./TableUserGames/TableUserGames";
import TableUserReviews from "./TableUserReviews/TableUserReviews";

const UserDashBoard = () => {
  return (
    <div className="container" style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <TableUserGames />
      </div>
      <div style={{ flex: 1 }}>
        <TableUserReviews />
      </div>
      <TableBuys />
    </div>
  );
};

export default UserDashBoard;