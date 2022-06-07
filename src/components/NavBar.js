import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid,Box, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export default function NavBar() {
  return (
    <>
    <Grid container style={{width: "100vw", backgroundColor: '#fbf1e3'}}>
      
      <nav style={{width:"100vw", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
         
            <Grid item lg={2}>
            <Link to="/"><img src={Logo} style={{width: "40%", height:"40%"}} className="logo" alt="Logo"/></Link>
            </Grid>
            
            <Link to="search"></Link>
            <Box style={{ paddingLeft: "-4em", backgroundColor: '#b5bea7', display: 'flex', borderRadius: '50px', width: '60%', minWidth: '15rem'}}>
            <SearchIcon style={{paddingLeft: '0.5rem'}}/>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}/>
              </Box>
          
           <Grid item>
            <Link style={{color:"#2e5137"}} to="login"><AccountCircleIcon /> Login</Link>
        
        
            <Link  to="shopping" style={{color:"#2e5137"}}><ShoppingCartIcon /> Shopping</Link>
         </Grid>
      </nav>
     
      </Grid>
    </>
  );
}