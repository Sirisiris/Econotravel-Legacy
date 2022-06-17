import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";


export default function Search() {
  

  return(
  <>
    <div className='div-como'>
      <Link to="/">
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
                marginTop: "7em"
              }}
            >
              Volver al Inicio
            </Button>
      </Link>
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
                marginTop: "7em",
                marginLeft: "1em",
                marginRigth: "1em",
              }}
            >
              Mas experiencias
            </Button>
      </Link>
    </div>
  </>)
  
}
