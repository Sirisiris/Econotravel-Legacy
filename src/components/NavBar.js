import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid,Box, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



export default function NavBar() {
  return (
    <>
    <Grid container style={{backgroundColor: '#fbf1e3'}}>
      
      <nav style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
         
            <Grid item lg={4}>
            <Link to="/"><img src={Logo} style={{width: "30%", height:"30%", minWidth:"40px"}} className="logo" alt="Logo"/></Link>
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
            <Link to="/login" style={{color:"#2e5137" }} ><AccountCircleIcon /> Login</Link>
        
        
            <Link  to="shopping" style={{color:"#2e5137", paddingLeft:"1em"}}><ShoppingCartIcon /> Shopping</Link>
         </Grid>
      </nav>
     
      </Grid>
    </>
  );
}