import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';
import {Grid,Box, InputBase, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";



export default function NavBar() {

const navigate= useNavigate()
const [search, setSearch] = useState ("")
const handleClick= (e)=> {
  e.preventDefault()
navigate (`/experiences?input=${search}`)
  
}

const handleChange= (e)=> {
  e.preventDefault()
  setSearch (e.target.value)
}


  return (
    <>
    <Grid container style={{backgroundColor: '#fbf1e3'}}>
      
      <nav style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", backgroundColor: "#fbf1e4", width: "100%", zIndex: "1"}}>
         
            <Grid item xs={1} sm={3} lg={3}>
            <Link to="/"><img src={Logo} style={{width: "30%", height:"30%", minWidth:"40px"}} className="logo" alt="Logo"/></Link>
            </Grid>
            
            <Grid item xs={6} sm={6} lg={6}>
            <Link to="search"></Link>
            
            <Box   style={{backgroundColor: '#b5bea7', display:"flex", alignItems:"center", borderRadius: '50px', minWidth: '15rem', height: "2.5rem", paddingLeft: "1%"}}>
             <Button onClick= {handleClick}>
              <SearchIcon style={{color: "#2e5137"}}/>
            </Button>
              <InputBase onChange= {handleChange}
              placeholder="Search…"
              inputProps={{'aria-label': 'search' }}/>
            </Box>
          </Grid>
           <Grid item xs={5} sm={3} lg={3} style={{display:"flex", gap: "5%", paddingLeft: "2%"}}>
            <Link to="/login"><Button style={{color: "#2e5137"}}><AccountCircleIcon style={{paddingRight: "5%"}} /> Login</Button></Link>
            <Link  to="shopping" style={{color:"#2e5137", paddingLeft:"1em"}}><Button style={{color: "#2e5137"}}><ShoppingCartIcon style={{paddingRight: "5%"}}/> Shopping</Button></Link>
         </Grid>
      </nav>
     
      </Grid>
    </>
  );
}