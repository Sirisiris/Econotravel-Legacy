import BarraSearch from "./BarraSearch";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const ResultadosFiltros = () => {
    
    const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/experiences").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

    return (
      <div className="search">
        <BarraSearch Data={data} Placeholder="Busca aquí la experiencia" />
      </div>
    );
  };
  
  export default ResultadosFiltros;