import BarraSearch from "./BarraSearch";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ResultadosFiltros = () => {
  const [data, setData] = useState([]);

  useEffect( ()=> {
    const fetchData = async ()=>{
    try {
      const result = await axios.get('https://econotravel-legacy-server.herokuapp.com/experiences',
        );

      setData(result.data);

    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
},[])

  return (
    <div className="search" style={{ backgroundColor: "#fbf1e4" }}>
      <BarraSearch Data={data} Placeholder="Busca aquí la experiencia" />
    </div>
  );
};

export default ResultadosFiltros;
