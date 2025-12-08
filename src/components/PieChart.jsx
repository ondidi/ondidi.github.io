import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

// Registrar os elementos do Chart.js necessários para o gráfico de barras
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BarChart = () => {
  const data = {
    labels: ["Cal", "Alt", "Temp", "Km"],
    datasets: [
      {
        label: "Esforço",
        data: [2750, 2200, null, null], // Apenas valores grandes nesse dataset
        backgroundColor: ["#021e4c", "#032e77"], // Marrom e Bege
        hoverBackgroundColor: ["#27ae60", "#f8eadf"],
        yAxisID: "y", // Primeiro eixo Y (padrão)
      },
      {
        label: "Condições",
        data: [null, null, 32, 75], // Apenas valores menores nesse dataset
        backgroundColor: ["#054dc7", "#5A6A85"], // Laranja e Azul
        hoverBackgroundColor: ["#FFA500", "#2980b9"],
        yAxisID: "y1", // Segundo eixo Y
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        position: "left",
        title: {
          display: true,
          text: "",
        },
      },
      y1: {
        beginAtZero: true,
        position: "right",
        title: {
          display: true,
          text: "",
        },
        grid: {
          drawOnChartArea: false, // Evita sobreposição das grades
        },
      },
    },
  };

  return (
    <div className="pie-container">
      <h3>Estatísticas do último pedal</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
