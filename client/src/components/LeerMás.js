import React, { useState } from "react";
import "../App.css";
import { Typography } from "@mui/material"; 




const LeerMás = ({ children }) => {
  const text = children;
  const [isLeerMás, setIsLeerMás] = useState(true);
  const toggleLeerMás = () => {
    setIsLeerMás(!isLeerMás);
  };
  return (
    <p className="text">
      {isLeerMás ? text.slice(0, 200) : text}
      <span onClick={toggleLeerMás} className="read-or-hide">
        {isLeerMás ? "   ...LeerMás" : "   ...MostrarMenos"}
      </span>
    </p>
  );
};
  
const Content = () => {
  return (
    <div className="container">
       <Typography
            variant="body1"
            color= "#2e5137"
            style={{ marginLeft:"2em", fontSize: "1.2rem", fontWeight: "400" }}>  "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. 
           
             
        <LeerMás>
        "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. 
        Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares.
        El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas,
        culminando en un mirador con magníficas vistas del Vallés y el mar. 
        Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, 
        donde descubriremos la Ermita y el Bosque de las Secuoyas. 
        Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y mongetes del Montseny."
        </LeerMás>
     </Typography>
    </div>
  );
};
  
export default Content;