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
    axios({
      method: "GET",
      uri: "http://localhost:3000/experiences",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
        "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
      },
    }).then((response) => {
      const item = response.data.find(
        (dataItem) => dataItem.id === parseInt(id)
      );
      setData(item);
    });
  }, [id]);

  return (
    <section style={{ backgroundColor: "#fbf1e4", paddingTop: "2rem" }}>
      <Box style={{ marginLeft: "5rem", paddingBottom: "4rem" }}>
        <CustomSeparator />
      </Box>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          height: "77.9vh",
        }}
      >
        <Box style={{ display: "flex", width: "90%" }}>
          <img src={data.img} alt="" width="442" height="284" />
          <Typography
            variant="body1"
            color=" #2e5137"
            fontSize="1em"
            fontWeight="400"
            style={{ paddingLeft: "1.5rem", paddingRight: "2rem" }}
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
            width: "20em",
            height: "18em",
          }}
        >
          <Typography
            variant="h2"
            color=" #2e5137"
            fontSize="1.5em"
            fontWeight="700"
            style={{ paddingLeft: "1em", marginTop: "1em" }}
          >
            {data.price}€
          </Typography>

          <FormControl
            style={{ display: "flex", flexDirection: "row", marginTop: "2em" }}
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
              marginTop: "2em",
              borderRadius: "50px",
              color: "white",
              textTransform: "none",
              width: "17em",
              margin: "auto",
            }}
            size="small"
          >
            Reservar
          </Button>
        </Box>
      </Container>
    </section>
  );
}
