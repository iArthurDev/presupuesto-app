"use client";
import "./home.css";
import Cabecero from "@/app/components/cabecero/cabecero";
import Egresos from "@/app/components/egresos/egresos";
import FormNuevoRegistro from "@/app/components/formNuevoRegistro/formNuevoRegistro";
import GraficaComponent from "@/app/components/grafica/grafica";
import Ingresos from "@/app/components/ingresos/ingresos";
import { useEffect, useState } from "react";

export default function Home() {
  //states de los arreglos de ingresos y egresos, asi como del monto total de ingresos y egresos
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [ingreso, setIngreso] = useState(0);
  const [egreso, setEgreso] = useState(0);

  const data = {
    labels: ["Ingresos", "Egresos"],
    datasets: [
      {
        label: "Registros",
        data: [ingreso, egreso],
        backgroundColor: ["rgb(68, 191, 232)", "rgba(224, 116, 69, 0.92)"],
        borderColor: ["rgb(68, 191, 232)", "rgba(224, 116, 69, 0.92)"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("ingresos"));
    if (datosGuardados) setIngresos(datosGuardados);
  }, []);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("egresos"));
    if (datosGuardados) setIngresos(datosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
  }, [ingresos]);

  useEffect(() => {
    localStorage.setItem("egresos", JSON.stringify(egresos));
  }, [egresos]);

  return (
    <div className="page-container">
      {/*Componente de cabecero*/}
      <Cabecero ingreso={ingreso} egreso={egreso} />
      {/*Componente de formulario de nuevo registro*/}
      <FormNuevoRegistro
        setIngresos={setIngresos}
        ingresos={ingresos}
        setIngreso={setIngreso}
        egresos={egresos}
        setEgresos={setEgresos}
        setEgreso={setEgreso}
      />
      {/*Componentes que cargan la lista de ingresos y egresos */}
      <div className="contenedor-registros">
        <Ingresos ingresos={ingresos} />
        <Egresos egresos={egresos} />
      </div>
      <div className="grafica-container">
        <GraficaComponent data={data} />
      </div>
    </div>
  );
}
