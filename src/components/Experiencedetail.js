import * as React from 'react';
import { Button,Container, Chip,Tab, Tabs } from '@mui/material';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid,Box, InputBase, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import exp1 from "../images/exp1.png";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material'; 







export default function Experiencedetail () {

    

    return (

        
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


          <Container>

        
          <Tabs>
          <Tab label="Home" style={{textTransform:"none"}}/>
         <Tab label="Montaña" style={{textTransform:"none"}}/>
         <Tab label="Bicicleta" style={{textTransform:"none"}}/>
        </Tabs>
        <Typography
            variant="body1"
            color= "#2e5137"
            style={{ paddingTop:"1em", width: "30rem", fontSize: "1.5rem", fontWeight: "700" }}>
          
          Paseo en bicicleta por el Montseny</Typography>
         
         <Container style={{display:"flex", flexDirection:"row", width:"90vw",height:"100vh"}}>
          
          <Box style={{display:"flex", marginTop:"3em", width:"80%"}}>
          <img src={exp1} alt="bici" width="482" height="284"/>
          <Typography
            variant="body1"
            color= "#2e5137"
            style={{ marginLeft:"2em", width: "50%", fontSize: "1rem", fontWeight: "400" }}>  "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. 
              Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares.
               El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. 
               Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. 
               Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y mongetes del Montseny."</Typography>
        
          </Box>

         
         
          <Grid container style= {{ dislay:"flex", flexDirection:"column", marginTop: "3em", border: "2px solid #2e5137", width:"20em", height:"18em"}}>
  

        <Typography variant='h2' color=" #2e5137" fontSize="1.5em"fontWeight="700" style={{paddingLeft:"1em",marginTop:"1em"}}>250€</Typography>
        
        
      <FormControl style={{display:"flex", flexDirection:"row", marginTop:"2em"}}>
               <Typography variant='h2' color=" #2e5137" fontSize="1.2em"fontWeight="200" style={{paddingLeft:"1em"}}>Cantidad</Typography>
           <Select style={{width:"2em", height:"2em", marginLeft:"1em"}}>
            
            <InputLabel  id="demo-simple-select-label">Cantidad</InputLabel>
        
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
       
        <Button style={{ 
              backgroundColor: "#2e5137", marginTop:"2em", borderRadius:"50px", color:"white",textTransform:"none", width:"17em", margin:"auto"}} size="small">
          Reservar
        </Button> 
        
    
          
        </Grid>



          </Container>


          </Container>
        
</Grid>
    )
    }