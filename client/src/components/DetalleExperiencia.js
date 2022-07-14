import * as React from "react";
import { Button, Container } from "@mui/material";
import { Grid, Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import CustomSeparator from "./CustomSeparator.js";
import Content from "./LeerMás.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function DetalleExperiencia() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(process.env)
    axios.get(
      process.env.REACT_APP_API_URL+'/experiences').then((response) => {
        console.log(response)
      const item = response.data.find(
        (dataItem) => dataItem.id === parseInt(id)
      );
      setData(item);
    });
  }, [id]);

  return (
    <section style={{ backgroundColor: "#fbf1e3", paddingTop: "2rem" }}>
      <Box style={{ marginLeft: "5rem", paddingBottom: "4rem" }}>
        <CustomSeparator />
      <Typography variant="h3"          color="#2e5137"
          style={{ fontFamily: 'Southerland', paddingTop: "2rem"}}>{data.title}</Typography>
      </Box>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          height: "77.9vh",
          marginLeft: "6rem",
          marginTop: "2rem"
        }}
      >
        <Box style={{ display: "flex"}}>
          <img src={data.img} alt="" width="550" height="300" style={{paddingRight: "5rem"}} />
          <Typography
            variant="body1"
            color=" #2e5137"
            fontSize="1em"
            fontWeight="400"
            style={{ paddingLeft: "1.5rem", paddingRight: "5rem", width: "35rem" }}
          >
            {data.description}
          </Typography>
        </Box>
        <Box
          container
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid #2e5137",
            height: "10rem",
            padding: "3rem"
          }}
        >
          <Typography
            variant="h2"
            color=" #2e5137"
            fontSize="1.6em"
            fontWeight="700"
            style={{textAlign: "center" }}
          >
            {data.price}€
          </Typography>

          <FormControl
            style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "2em" }}
          >
            <Typography
              variant="h2"
              color=" #2e5137"
              fontSize="1.2em"
              fontWeight="200"
              style={{ paddingLeft: "1em" }}
            >
              Cantidad
            </Typography>
            <Select style={{ width: "2em", height: "2em", marginLeft: "1em" }}>
              <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>

              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>

          <Button
            style={{
              backgroundColor: "#2e5137",
              borderRadius: "50px",
              color: "white",
              textTransform: "none",
              width: "8rem",
              marginTop: "2rem",
              marginBottom: "5rem"
            }}
            size="medium"
          >
            Reservar
          </Button>
        </Box>
      </Container>
    </section>
  );
}
