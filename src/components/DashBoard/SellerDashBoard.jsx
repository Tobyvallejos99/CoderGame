import { Card } from "@tremor/react";
import TableGamesToSell from "./DashBoardComponents/TableGamesToSell/TableGamesToSell";
import SellerBalance from "./SellerBalance/SellerBalance";
import DonutSeller from "./DonutSeller/DonutSeller";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SellerDashBoard = () => {
  const { user } = useAuth0();
  const [data, setData] = useState([]);
  const sub = user?.sub;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/empresa/ventas/${sub}`
        );
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  let allTotal = 0;
  data.forEach((element) => {
    allTotal = element.ganancias + allTotal;
  });


  return (
    <div className="text-center">
      <TableGamesToSell />
      <SellerBalance total={allTotal} />
      <DonutSeller data={data} />
    </div>
  );
};

export default SellerDashBoard;
