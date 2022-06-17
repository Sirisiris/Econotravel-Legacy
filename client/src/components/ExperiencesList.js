import React from "react";
import { Button, Container, Chip } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useSearchParams } from "react-router-dom";

export default function ExperiencesList() {
  
  // const [searchParams,setSearchParams ]=useSearchParams()
  // const searchTerm= searchParams.get ("input"||"")
  // const [data, setData]=useState([]);
    
  // useEffect (()=>{
  //   axios.get (`${process.env.REACT_APP_URL}/experiences`)
  //   .then ((response)=> {
  //     console.log(response)
  //     setData (response.data.filter(e=>e.title.toLowerCase().includes(searchTerm)))
  //   })
  // },[searchTerm])




  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/experiences").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <Grid container style={{ backgroundColor: "#fbf1e3" }} direction="row" justifyContent="center" alignItems="center">
      {data.map((data) => (
        <Container style={{ marginTop: "4em", marginBottom: "4em", marginLeft:"1em", marginRight:"1em", width: "auto", backgroundColor:"white", padding: "1.5em", border:"1px solid #000"}}>
          <img src={data.img} width="249" alt="bike"></img>
          <Box style={{ marginTop: "0.5em" }}>
            <Chip
              label={data.tag1}
              variant="outlined"
              style={{ width: "80px", height: "25px" }}
            />
            <Chip
              label={data.tag2}
              variant="outlined"
              style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
            />
            <Chip
              label={data.tag3}
              variant="outlined"
              style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
            />
            <h1
              style={{ fontSize: "1.2em", color: "#2e5137", marginTop: "1em" }}
            >
              {data.title}
            </h1>
            <h2
              style={{ fontSize: "1em", fontWeight: "200", color: "#2e5137" }}
            >
              {data.price}€/persona
            </h2>
            <Button
            style={{
              backgroundColor: "#2e5137",
              borderRadius: "50px",
              color: "white",
              marginLeft: "10em",
              marginTop: "1em",
              textTransform: "none",
            }}
            size="small"
          >
            Reserva ahora
          </Button>
          </Box>
          
        </Container>
      ))}
    </Grid>
  );
}
