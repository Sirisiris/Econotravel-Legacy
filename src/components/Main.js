import React from "react";
import { Box, Button, Typography } from "@mui/material";
import hero1 from "../images/hero-image1.png";
import travel from "../images/travel.png";
import hero2 from "../images/hero-image2.png";

export default function Main() {
  return (
    <main>
      {/* -------------- Sección 1 Hero Image ------------- */}
      <section className="Hero">
        <Box
          style={{
            backgroundImage: `url(${hero1})`,
            height: "650px",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgrondSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#2e5137",
              width: "15rem",
              height: "3rem",
              borderRadius: "50px",
            }}
          >
            Reserva ahora
          </Button>
        </Box>
      </section>

      {/* -------------- Sección 2 Muestra de experiencias ------------- */}

      <section
        className="Experiencias"
        style={{
          backgroundColor: "#FBF1E3",
          height: "30rem",
          textAlign: "center",
          paddingTop: "10rem",
        }}
      >
        <Typography variant="h1" color="#2e5137">
          Experiencias en el área de Barcelona
        </Typography>
        <Typography variant="h5" color="#2e5137">
          Ubicación - Transporte - Duración
        </Typography>
      </section>

      {/* -------------- Sección 3 Texto Travel + Botón de contacto ------------- */}

      <section
        className="Travel"
        style={{ backgroundColor: "#498057", padding: "5rem", display: "flex" }}
      >
        <Box>
          <img src={travel} alt=""/>
        </Box>
        <Box style={{padding: '5rem'}}>
          <Typography variant="h2" color="#FBF1E3">
            Travel any corner of Barcelona with Us
          </Typography>
          <Typography
            variant="body1"
            color="#FBF1E3"
            style={{ width: "50 rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id rutrum sapien. Donec cursus scelerisque diam, vel luctus neque
            tempor sed. Aliquam venenatis euismod efficitur. Vivamus congue,
            urna quis vulputate tincidunt, velit urna suscipit ex, et ornare
            nisi turpis et ligula. Vestibulum iaculis dolor condimentum tellus
            fringilla bibendum in at justo. Morbi nulla mauris, sagittis ut
            convallis et, scelerisque sit amet ipsum. Morbi ac vestibulum quam,
            in viverra quam etiam eget posuere enim, at blandit enim. Integer
            egestas nec risus ut viverra.
          </Typography>
          <Button style={{border: '2px solid #FBF1E3', color: '#FBF1E3', marginTop: '2rem'}}>Contáctanos</Button>
        </Box>
      </section>

      {/* -------------- Sección 4 Hero con botón de registro ------------- */}

      <section
        className="Hero2"
        style={{ backgroundColor: "#FBF1E3", height: "40rem", padding: "5rem" }}
      >
        <Box
          style={{
            backgroundImage: `url(${hero2})`,
            height: "650px",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgrondSize: "cover",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" color="#FBF1E3" style={{width: '40rem', textAlign: 'center'}}>
          No te lo pierdas, regístrate hoy y recibe un 25% de descuento en tu próxima experiencia
          </Typography>
          <Button style={{
              backgroundColor: "#2e5137",
              width: "15rem",
              height: "3rem",
              borderRadius: "50px",
              marginTop: "2rem"}}>Registrate ahora</Button>
        </Box>
      </section>
    </main>
  );
}
