import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid,Box, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import exp1 from "./src/images/exp1.png";

export default function Experiences () {


    return (

        <>
        <Grid container style={{backgroundColor: '#fbf1e3'}}>
          
          <nav style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
             
                <Grid item lg={4}>
                <Link to="/"><img src={Logo} style={{width: "30%", height:"30%"}} className="logo" alt="Logo"/></Link>
                </Grid>
                
                <Grid item lg={6}>
                <Link to="search"></Link>
                <Box style={{paddingLeft: "4em", backgroundColor: '#b5bea7', display:"flex", alignItems:"center", borderRadius: '50px', minWidth: '15rem'}}>
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
         
        </Grid>
      
      
      <>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          img src={exp1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>



      </>
      
      </>
      
      
      );
    }

