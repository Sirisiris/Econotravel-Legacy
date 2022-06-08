import React from "react";
import fundadora from "../images/Fundadora.png";
import { Typography, Grid } from "@mui/material";

export default function ComoFunciona() {
  return (
    <section style={{backgroundColor: "#fbf1e4", display: "flex", alignItems: "center"}}>
      <Grid container>
          <Grid item xs={4}>
          <img src={fundadora} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
          </Grid>
          <Grid item xs={8}>
        <Typography variant="h1" color="initial">
          Nuestra Misión
        </Typography>
        <Typography variant="body1" color="initial">
          Nuestra empresa se fundó a raíz de un viaje que nuestra
          fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el
          verano de 2001.<br />
          Durante ese periodo, descubrió que las opciones
          turísticas que ofrecían ciudades como Barcelona, Girona y Reus
          dependían de transportes contaminantes y actividades poco respetuosas
          con la naturaleza y el entorno, algo que causaba un progresivo
          deterioro de los increíbles parajes naturales de Cataluña. <br />
          Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar
          una agencia de experiencias turísticas donde el respeto por la
          naturaleza fuera la principal prioridad.<br />Así nació Econotravel
          Barcelona.
        </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
