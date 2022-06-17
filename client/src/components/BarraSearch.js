
import React, { useState } from "react";
import { Button, Container, Chip } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router";

const BarraSearch = (props) => {
  const [filterValue, setFilterValue] = useState([]);
  const navigate = useNavigate()

  

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    navigate("/filtros");
    const filterArray = props.Data.filter((e) => {
      return e.title.toLowerCase().includes(searchValue.toLowerCase()) 
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  return (
    <div>
      <div classname="searchBox">
      <input style={{backgroundColor: '#b5bea7', border: "2px solid #2e5137", borderRadius: '50px', minWidth: '40rem', height: "2.5rem", paddingLeft: "1%", position:"absolute", zIndex:"10", top:"0.5em", left:"12em"}}
        type="text"
        placeholder={props.Placeholder}
        onChange={handleSearch}
      />

      </div>
      <div>
        {filterValue.length !== 0 &&
          filterValue.map((e) => {
            return (
                <Grid container style={{ backgroundColor: "#fbf1e3" }} direction="row" justifyContent="center" alignItems="center">
                  
                  <Container style={{ marginTop: "4em", marginBottom: "4em", marginLeft:"1em", marginRight:"1em", width: "auto", backgroundColor:"white", padding: "1.5em", border:"1px solid #000"}}>
                    <img src={e.img} width="249" alt="bike"></img>
                    <Box style={{ marginTop: "0.5em" }}>
                      <Chip
                        label={e.tag1}
                        variant="outlined"
                        style={{ width: "80px", height: "25px" }}
                      />
                      <Chip
                        label={e.tag2}
                        variant="outlined"
                        style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
                      />
                      <Chip
                        label={e.tag3}
                        variant="outlined"
                        style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
                      />
                      <h1
                        style={{ fontSize: "1.2em", color: "#2e5137", marginTop: "1em" }}
                      >
                        {e.title}
                      </h1>
                      <h2
                        style={{ fontSize: "1em", fontWeight: "200", color: "#2e5137" }}
                      >
                        {e.price}€/persona
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
                  
                </Grid>
              );
          })}
      </div>
    </div>
  );
};
export default BarraSearch;
