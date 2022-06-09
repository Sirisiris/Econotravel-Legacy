import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Ubicación" {...a11yProps(0)} />
          <Tab label="Transporte" {...a11yProps(1)} />
          <Tab label="Duración" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box style={{ display: "flex" }}>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 1
          </Box>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 2
          </Box>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 3
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box style={{ display: "flex" }}>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 4
          </Box>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 5
          </Box>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 6
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box style={{ display: "flex" }}>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 7
          </Box>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 8
          </Box>
          <Box style={{ border: "2px solid black", width: "10rem" }}>
            Experiencia 9
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
