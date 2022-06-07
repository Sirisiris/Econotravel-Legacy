import React, { Component } from 'react';
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