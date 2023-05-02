import { Card, DonutChart, Title } from "@tremor/react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    nameGame: "pepito",
    ganancias: 3000,
  },
  {
    id: 2,
    nameGame: "pepito2",
    ganancias: 3300,
  },
  {
    id: 3,
    nameGame: "loorenxo",
    ganancias: 20,
  },
];
const DonutSeller = () => {
  return (
    <Card className="container rounded bg-danger">
      <Title>Sale by seller</Title>
      <DonutChart
        data={data}
        category="ganancias"
        datakey="nameGame"
        marginTop="mt-6"
        colors={["indigo", "green", "rose"]}
      />
    </Card>
  );
};
export default DonutSeller;
