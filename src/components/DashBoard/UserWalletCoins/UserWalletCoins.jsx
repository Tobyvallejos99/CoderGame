import { Card, Text, Title, Badge, Metric } from "@tremor/react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    saldoCoins: 2500,
  },
];
const UserWalletCoins = () => {
  return (
    <Card>
      <Text>My Wallet</Text>
      {data.map((coins) => (
        <Metric>
          {" "}
          <h1> ${coins.saldoCoins} Coins </h1>
        </Metric>
      ))}
      <Text>
        <Link to="/payment">Buy more CoderCoins</Link>
      </Text>
    </Card>
  );
};
export default UserWalletCoins;
