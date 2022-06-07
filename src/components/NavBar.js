import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid,Box, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export default function NavBar() {
  return (
    <>
    <Grid container>
      <nav style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#fbf1e3'}}>
         
         <Grid item>
            <Link to="/"><img src={Logo} style={{width: "30%"}} className="logo" alt="Logo"/></Link>
          </Grid>
          <Grid item sm={6}>
            <Link to="search"></Link>
            <Box style={{backgroundColor: '#b5bea7', display: 'flex', alignItems: 'center', borderRadius: '50px', width: '60%', minWidth: '15rem'}}>
            <SearchIcon fontSize="large" style={{paddingLeft: '0.5rem'}}/>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}/>
              </Box>
          </Grid>
          <Grid item >
            <Link style={{color:"#2e5137"}} to="login"><AccountCircleIcon /> Login</Link>
        
        
            <Link  to="shopping" style={{color:"#2e5137"}}><ShoppingCartIcon /> Shopping</Link>
          </Grid>
        
      </nav>
      </Grid>
    </>
  );
}