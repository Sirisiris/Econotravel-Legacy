import * as React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Tab, Tabs, Button, Chip } from "@mui/material";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 6907c215201a6747a93cb25f2ad91b1bcf70fcbd
import exp1 from "../images/exp1.png";
import exp2 from "../images/exp2.png";
import exp3 from "../images/exp3.png";
import exp4 from "../images/exp4.png";
import exp5 from "../images/exp5.png";
import exp6 from "../images/exp6.png";
import exp7 from "../images/exp7.png";
import exp8 from "../images/exp8.png";
import exp9 from "../images/exp9.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { background: "#2e5137" } }}
        >
          <Tab
            label="Ubicación"
            {...a11yProps(0)}
            style={{ fontSize: "1.5rem" }}
          />
          <Tab
            label="Transporte"
            {...a11yProps(1)}
            style={{ fontSize: "1.5rem" }}
          />
          <Tab
            label="Duración"
            {...a11yProps(2)}
            style={{ fontSize: "1.5rem" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box style={{ display: "flex" }}>
          {/* ---------------------------------------- Ubicación ----------------------------------------------- */}

          <Box style={{ margin: "2rem" }}>
            <img src={exp1} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Montaña"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="Bici"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="2 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                Paseo en bicicleta por el Montseny
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                250€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>

          <Box style={{ margin: "2rem" }}>
            <img src={exp2} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Playa"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="Barco"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="4 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                Descubre la costa en barco de vela
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                280€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>
          <Box style={{ margin: "2rem" }}>
            <img src={exp3} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Ciudad"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="Barco"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="4 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                La Barcelona Modernista de noche
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                200€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* --------------------------------------- Transporte --------------------------------- */}

        <Box style={{ display: "flex" }}>
          <Box style={{ margin: "2rem" }}>
            <img src={exp4} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Montaña"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="A pie"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="4 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                Del Huerto a la mesa
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                145€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>

          <Box style={{ margin: "2rem" }}>
            <img src={exp5} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Montaña"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="A pie"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="2 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                Arte en la montaña sagrada
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                125€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>

          <Box style={{ margin: "2rem" }}>
            <img src={exp6} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Ciudad"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="Bicicleta"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="3 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                Barcelona urbana en bicicleta
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                150€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* ---------------------------------------- Duración ---------------------- */}

        <Box style={{ display: "flex" }}>
          <Box style={{ margin: "2rem" }}>
            <img src={exp7} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Ciudad"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="A pie"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="6 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                De playa en playa
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                320€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>

          <Box style={{ margin: "2rem" }}>
            <img src={exp8} width="249" height="381" alt="bike"></img>
            <Box>
              <Chip
                label="Ciudad"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="A pie"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="8 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                Actividad especial Pride 2022
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                400€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
            <Box>
              <Chip
                label="Montaña"
                variant="outlined"
                style={{ width: "80px", height: "25px" }}
              />
              <Chip
                label="A pie"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <Chip
                label="4 horas"
                variant="outlined"
                style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
              />
              <h1
                style={{
                  fontSize: "1.2em",
                  color: "#2e5137",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                Montjuic inolvidable
              </h1>
              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: "200",
                  color: "#2e5137",
                  textAlign: "left",
                }}
              >
                180€/persona
              </h2>
            </Box>
            <Button
              style={{
                backgroundColor: "#2e5137",
                borderRadius: "50px",
                color: "white",
                marginLeft: "13.5em",
                marginTop: "-2em",
                textTransform: "none",
              }}
              size="small"
            >
              Reserva ahora
            </Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
