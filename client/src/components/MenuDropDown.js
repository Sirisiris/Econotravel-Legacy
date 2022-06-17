import { Link } from "react-router-dom";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Menu, MenuItem, Paper} from "@mui/material";
import { useState, useEffect } from "react";

export default function MenuDropDown() {
  /*  const navigate= useNavigate()
  const [search, setSearch] = useState ("")
  const handleClick= (e)=> {
    e.preventDefault()
  navigate (`/experiences?input=${search}`)
  
  }
  
  const handleChange= (e)=> {
    e.preventDefault()
    setSearch (e.target.value)
  }
  */

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
        <Button onClick={openMenu} style={{ color: "#2e5137" }}>
          <AccountCircleIcon style={{ paddingRight: "5%" }} /> Login
        </Button>
        <Menu id="lame-menu"
        anchorEl={anchorEl}
        keepMounter
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
                <Link to="/login">
                  <MenuItem onClick={handleClose} sx={{color: "#2e5137", fontSize: "1.3rem"}}>Login</MenuItem></Link>
                  <Link to="/register">
                    <MenuItem onClick={handleClose} sx={{color: "#2e5137", fontSize: "1.3rem"}}>Register</MenuItem>
                    </Link>
        </Menu>
    </>
  );
}
