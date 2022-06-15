import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CarritoVacio from "../images/CarritoVacio.png";

export default function Carrito() {
  return (
    <section
      style={{
        backgroundColor: "#fbf1e4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "86.3vh",
        textAlign: "center"
      }}
    >
      <Box>
      <Typography
          variant="h2"
          color="#2e5137"
          style={{ fontFamily: "Next Southerland Serif DEMO", paddingBottom: "2rem"}}
        >
          Reservas
        </Typography>
        <img src={CarritoVacio} alt="" style={{padding: "3rem", width: "60%"}}/>
        <Typography variant="h4" color="#2e5137">Ups! No tienes ninguna experiencia reservada.</Typography>
        <Link to="/experiences">
            <Button
              style={{
                backgroundColor: "#2e5137",
                width: "15rem",
                height: "3rem",
                borderRadius: "50px",
                color: "#FBF1E3",
                textTransform: "capitalize",
                fontSize: "1.5rem",
                fontWeight: "200",
                marginTop: "2rem"
              }}
            >
              Reserva ahora
            </Button>
          </Link>
      </Box>
    </section>
  );
}
