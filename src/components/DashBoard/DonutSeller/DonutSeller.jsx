import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutSeller({ data }) {
  let labels = [];
  let ganancia = [];

  data?.forEach((el) => {
    labels.push(el.name);
    ganancia.push(el.ganancias);
  });
  const datasets = [
    {
      label: "Ganancias por Juego",
      data: ganancia,
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
  ];

  const datadonut = {
    labels: labels,
    datasets: datasets,
  };

  return <Doughnut data={datadonut} />;
}

export default DonutSeller;
