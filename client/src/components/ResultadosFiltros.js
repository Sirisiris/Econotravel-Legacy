import BarraSearch from "./BarraSearch";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ResultadosFiltros = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      uri: "http://localhost:3000/experiences",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
      },
    }).then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div className="search" style={{ backgroundColor: "#fbf1e4" }}>
      <BarraSearch Data={data} Placeholder="Busca aquí la experiencia" />
    </div>
  );
};

export default ResultadosFiltros;
