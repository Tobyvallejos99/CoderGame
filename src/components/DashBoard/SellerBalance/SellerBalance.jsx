import { Card, Text, Title, Badge, Metric } from "@tremor/react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    nameGame: "pepito",
    ganancias: 3000,
  },
];
const UserWalletCoins = () => {
  return (
    <Card className="container rounded bg-danger">
      <Text>
        {" "}
        <h2> Sales </h2>
      </Text>
      {data.map((coins) => (
        <Metric>
          {" "}
          <h1> ${coins.saldoCoins} Coins </h1>
        </Metric>
      ))}
    </Card>
  );
};
export default UserWalletCoins;
