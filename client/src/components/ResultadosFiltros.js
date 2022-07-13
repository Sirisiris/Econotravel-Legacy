import BarraSearch from "./BarraSearch";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ResultadosFiltros = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      uri: "https://econotravel-legacy-server.herokuapp.com/experiences",
      headers: {
        "Access-Control-Allow-Origin": "http://example.com",
        "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",        
        "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"      },
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
