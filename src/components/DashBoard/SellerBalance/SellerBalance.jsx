import { Card, Text, Title, Badge, Metric } from "@tremor/react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    nameGame: "pepito",
    ganancias: 3000,
  },
];
const UserWalletCoins = ({ total }) => {
  return (
    <Card className="container rounded bg-danger">
      <Text>
        {" "}
        <h2> Total sales </h2>
        <h2> Total Sells </h2>
      </Text>
      {data.map((coins) => (
        <Metric>
          {" "}
          <h1>$ {total}</h1>
        </Metric>
      ))}
    </Card>
  );
};
export default UserWalletCoins;
