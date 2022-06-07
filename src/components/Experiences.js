import * as React from 'react';
import { Button,Container, Chip } from '@mui/material';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid,Box, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import exp1 from "../images/exp1.png";

export default function Experiences () {


    return (

        <>
        <Grid container style= {{ backgroundColor: '#fbf1e3'}}>
          
          <nav style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
             
                <Grid item lg={4}>
                <Link to="/"><img src={Logo} style={{width: "30%", height:"30%", marginLeft:"6em"}} className="logo" alt="Logo"/></Link>
                </Grid>
                
                <Grid item lg={6}>
                <Link to="search"></Link>
                <Box style={{paddingLeft: "4em", backgroundColor: '#b5bea7', display:"flex", borderRadius: '50px', minWidth: '15rem'}}>
                <SearchIcon/>
                <InputBase
                  placeholder="Search…"
                  inputProps={{'aria-label': 'search' }}/>
                  </Box>
              </Grid>
               <Grid item lg={2} style={{display:"flex", paddingLeft:"10em"}}>
                <Link style={{color:"#2e5137" }} to="login"><AccountCircleIcon /> Login</Link>
            
            
                <Link  to="shopping" style={{color:"#2e5137", paddingLeft:"1em"}}><ShoppingCartIcon /> Shopping</Link>
             </Grid>
          </nav>
         
        

    
      
     
      
      <Container style={{ marginTop:"6em"}}>
      
        <img src={exp1}
        width= "249"
        height="381"
          alt="bike"></img>
        <Box>
        <Chip label="Chip Outlined" variant="outlined" style={{width:"80px",height:"25px"}}/>
        <Chip label="Chip Outlined" variant="outlined"style={{width:"80px", height:"25px", marginLeft:"0.5em"}} />
        <Chip label="Chip Outlined" variant="outlined" style={{width:"80px",height:"25px", marginLeft:"0.5em"}}/>
        <h1 style={{fontSize:"1.2em", color:"#2e5137", marginTop:"1em"}}>Montaña</h1>
        <h2 style={{fontSize:"1em",fontWeight:"200", color:"#2e5137" }} >250€/persona</h2>
       
        
        </Box>
        <Button style={{
              backgroundColor: "#2e5137", borderRadius:"50px", color:"white", marginLeft:"10em", marginTop:"-5em",textTransform:"none"}} size="small">
          Reserva ahora
        </Button>
     
    
</Container>
</Grid>

     </>

    
      
    
      
      
      );
    }

