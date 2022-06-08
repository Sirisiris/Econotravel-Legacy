import React from "react";
import fundadora from "../images/Fundadora.png";
import { Typography, Grid, Box} from "@mui/material";

export default function ComoFunciona() {
  return (
    <section style={{backgroundColor: "#fbf1e4", display: "flex", alignItems: "center"}}>
      <Grid container>
          <Grid item xs={4}>
          <img src={fundadora} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
          </Grid>
          <Grid item xs={8} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Typography variant="h1" color="#2e5137" style={{paddingBottom: "3rem"}}>
          Nuestra Misión<br />
        </Typography>
        <Typography variant="body1" color="#2e5137" style={{width: "40rem", textAlign: "center"}}>
          Nuestra empresa se fundó a raíz de un viaje que nuestra
          fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el
          verano de 2001.
          Durante ese periodo, descubrió que las opciones
          turísticas que ofrecían ciudades como Barcelona, Girona y Reus
          dependían de transportes contaminantes y actividades poco respetuosas
          con la naturaleza y el entorno, algo que causaba un progresivo
          deterioro de los increíbles parajes naturales de Cataluña. <br />
          Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar
          una agencia de experiencias turísticas donde el respeto por la
          naturaleza fuera la principal prioridad.<br />Así nació Econotravel
          Barcelona.<br /><br />
          <Box style={{border: " 2px solid #2e5137", backgroundColor: "#b5bea7", borderRadius: "50px", textAlign: "center",  marginTop: "3rem", padding: "1rem"}}>
          Teléfono: 93 123 45 67<br />
          Correo: info@econotravel.com <br />
          Dirección: Carrer dels Viatgers, 28, 08001 Barcelona 
          </Box>
        </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
