import PruebaResultados from "./PruebaResultados";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
    
    const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/experiences").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

    return (
      <div>
        <PruebaResultados Data={data} Placeholder="Please enter the name " />
      </div>
    );
  };
  
  export default App;