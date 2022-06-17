import { Link } from "react-router-dom";
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid, Button} from "@mui/material";
//import SearchIcon from '@mui/icons-material/Search';
import ResultadosFiltros from "./ResultadosFiltros";
//import ExperiencesList from "./ExperiencesList";
// import { useState, useEffect } from "react";
import MenuDropDown from "./MenuDropDown";



export default function NavBar() {
  // const navigate= useNavigate()
  // const [search, setSearch] = useState ("")
  // const handleClick= (e)=> {
  //   <Link to="prueba"></Link>
  // }

  
  // const handleChange= (e)=> {
  //   e.preventDefault()
  //   setSearch (e.target.value)
  // }
  
  return (
    <>
    <Grid container>
      <nav style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", backgroundColor: "#fbf1e4", width: "100%"}}>
         
            <Grid item xs={1} sm={3} lg={3}>
            <Link to="/"><img src={Logo} style={{width: "30%", height:"30%", minWidth:"40px"}} className="logo" alt="Logo"/></Link>
            </Grid>
            
            <Grid item xs={6} sm={6} lg={6}>  
            
              
            {/* <Box   style={{backgroundColor: '#b5bea7', display:"flex", alignItems:"center", borderRadius: '50px', minWidth: '15rem', height: "2.5rem", paddingLeft: "1%"}}>
             <Button onClick= {handleClick}>
             
            </Button>
              <InputBase id="busqueda" onChange= {handleChange}
              placeholder="Search…"
              inputProps={{'aria-label': 'search' }}/>
            </Box>  */}

          </Grid> 
          
           <Grid item xs={5} sm={3} lg={3} style={{display:"flex", gap: "5%", paddingLeft: "2%"}}>
            <MenuDropDown/>
            <Link  to="carrito" style={{color:"#2e5137", paddingLeft:"1em"}}><Button style={{color: "#2e5137"}}><ShoppingCartIcon style={{paddingRight: "5%"}}/> Shopping</Button></Link>
         </Grid>
      </nav>
      <ResultadosFiltros />
      
      
      </Grid>
      
      
     
    </>
  );
}