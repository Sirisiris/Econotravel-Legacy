import  React, {useState, useEffect} from 'react';
import { Button,Container, Chip } from '@mui/material';
import {Grid,Box} from "@mui/material";
import { Link } from "react-router-dom";

import exp1 from "../images/exp1.png";






export default function Experiences () {

    const[experiencias, setExperiencias] = useState([])
    useEffect(()=>{
      fetch('db.json')
    })
    
    

    return (


        <Grid container style= {{ backgroundColor: '#fbf1e3'}}>
            
      
      <Container 
      
      style={{ marginTop:"6em" }}>
      
        <img src={exp1}
        width= "249"
        height="381"
          alt="bike"></img>
        <Box>
        <Chip label="Montaña" variant="outlined" style={{width:"80px",height:"25px"}}/>
        <Chip label="Bici" variant="outlined"style={{width:"80px", height:"25px", marginLeft:"0.5em"}} />
        <Chip label="2 horas" variant="outlined" style={{width:"80px",height:"25px", marginLeft:"0.5em"}}/>
        <h1 style={{fontSize:"1.2em", color:"#2e5137", marginTop:"1em"}}>MOntaña</h1>
        <h2 style={{fontSize:"1em",fontWeight:"200", color:"#2e5137" }} >250€/persona</h2>
        
        </Box>
        <Link to= "/experiencesdetail">
        <Button style={{
              backgroundColor: "#2e5137", borderRadius:"50px", color:"white", marginLeft:"10em", marginTop:"-5em",textTransform:"none"}} size="small">
          Reserva ahora
        </Button>
        </Link>
        
     
    
</Container>
</Grid>
        


      
      );
    }

