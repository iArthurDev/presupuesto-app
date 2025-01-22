"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./grafica.css";

export default function GraficaComponent({ data }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="contenedor-PieGrafic">
      <Pie data={data} />
    </div>
  );
}
