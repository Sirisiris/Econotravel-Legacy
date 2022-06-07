import React from 'react';
import { Box, Button } from '@mui/material';
import hero1 from '../images/hero-image1.png';

export default function Main() {
  return (
  <main>
    <section>
    <Box style={{backgroundImage: `url(${hero1})`,
  height: '500px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgrondSize: 'cover',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'}}>
    <Button style={{backgroundColor: '#fff'}}>Hola</Button>
    </Box>
    </section>
    <section>
      HOLAAOSDMSAIDNSADUSABDBSADUSADBSAUDSAUDB
      </section>
    </main>
    )}

/*
import React, { Component } from 'react';
import { Box } from '@mui/material';
import hero1 from '../images/hero-image1.png';

const useStyles = GlobalStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url (${hero1})`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgrondSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
  }
}));


export default class Main extends Component {
  render() {
    return (
      <Box style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url (${hero1})`, height: '1'}}>
        <h1>Hola, Bienvenido al sistema</h1>
      </Box>
    );
  }
}
*/

/* import React, { Component } from 'react';
import hero1 from '../images/hero-image1.png';
import { Grid } from "@mui/material";

export default class Main extends Component {
  render() {
    return (
      <Grid container sm={12} xl={12} >
       style={{backgroundImage: `url(${hero1})`}} 
      </Grid>
    );
  }
}
*/