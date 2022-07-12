import React from "react";
import { Button, Container, Chip } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    axios({
      method: "GET",
      uri: "http://localhost:3000/experiences",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
        "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
      }}).then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <Grid
      container
      style={{ backgroundColor: "#fbf1e3" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {data.map((data) => (
        <Container
          key={data.id}
          style={{
            marginTop: "4em",
            marginBottom: "4em",
            marginLeft: "1em",
            marginRight: "1em",
            backgroundColor: "#fdf7f0",
            padding: "1.5em",
            border: "1px solid #2e5137",
            borderRadius: "10px",
            minWidth: "23rem",
            maxWidth: "23rem",
            textAlign: "center",
            height: "23rem"
          }}
        >
          <img src={data.img} width="250px" alt="bike"></img>
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
          </Box>
          <Link to={`/detalle/${data.id}`}>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginTop: "1rem",
                textTransform: "none",
                width: "8rem"
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Link>
        </Container>
      ))}
    </Grid>
  );
}
