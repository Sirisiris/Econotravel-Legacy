import React from "react";
import { Button, Container, Chip } from "@mui/material";
import { Grid, Box, Typography } from "@mui/material";
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

  useEffect( ()=> {
    const fetchData = async ()=>{
    try {
      const result = await axios.get('https://econotravel-legacy-server.herokuapp.com/experiences',
        );

      setData(result.data);

    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
},[])

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
            borderRadius: "6px",
            minWidth: "23rem",
            maxWidth: "23rem",
            textAlign: "center",
            height: "23rem",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"
          }}
        >
          <img src={data.img} width="250px" height="150px" alt="bike"></img>
          <Box style={{ marginTop: "0.5em" }}>
            <Chip
              label={data.tag1}
              variant="outlined"
              style={{ width: "80px", height: "25px" , backgroundColor: "#b5bea7", textTransform: "capitalize", color: "#2e5137"}}
            />
            <Chip
              label={data.tag2}
              variant="outlined"
              style={{ width: "80px", height: "25px", marginLeft: "0.5em"  , backgroundColor: "#b5bea7", textTransform: "capitalize", color: "#2e5137"}}
            />
            <Chip
              label={data.tag3}
              variant="outlined"
              style={{ width: "80px", height: "25px", marginLeft: "0.5em"  , backgroundColor: "#b5bea7", textTransform: "capitalize", color: "#2e5137"}}
            />
          </Box>
          <Box style={{paddingTop: "1rem"}}>
        <Typography
          variant="h6"
          color="#2e5137">
            {data.title}
          </Typography>
          <Typography
          variant="body1"
          fontWeight="200"
          color="#2e5137">
              {data.price}€/persona
            </Typography>
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
          </Box>
        </Container>
      ))}
    </Grid>
  );
}
