import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutSeller = () => {
  const [chartData, setChartData] = useState({});
  const { user } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/empresa/ventas/${user?.sub}`
        );
        const { data } = response;
        console.log(data);

        if (data && data.length > 0) {
          const nameGame = data?.map((producto) => producto.name);
          console.log(nameGame);
          const sell = data?.map((producto) => producto.ganancias);
          console.log(sell);
          setChartData({
            labels: nameGame,
            datasets: [
              {
                data: sell,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return fetchData();
  }, [user.sub]);

  return <Doughnut data={chartData} />;
};

export default DonutSeller;
