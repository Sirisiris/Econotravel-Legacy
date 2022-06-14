import React from "react";
import { Button, Box, TableFooter } from "@mui/material";
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <TableFooter
      style={{
        backgroundColor: "#2e5137",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box style={{ display: "flex", gap: "3rem" }}>
        <Link to="/comofunciona">
        <Button
          style={{
            color: "#faf0e3",
            backgroundColor: "transparent",
            fontWeight: "400",
            fontSize: "1.1rem",
            textTransform: "capitalize",
          }}
        >
          ¿Cómo funciona?
        </Button>
        </Link>
        <Link to="/nosotros">
        <Button
          style={{
            color: "#faf0e3",
            backgroundColor: "transparent",
            fontWeight: "400",
            fontSize: "1.1rem",
            textTransform: "capitalize",
          }}
        >
          ¿Quienes somos?
        </Button>
        </Link>
        <Link to="/mediospago">
        <Button
          style={{
            color: "#faf0e3",
            backgroundColor: "transparent",
            fontWeight: "400",
            fontSize: "1.1rem",
            textTransform: "capitalize",
          }}
        >
          Medios de pago
        </Button>
        </Link>
        
      </Box>
    </TableFooter>
  );
}
