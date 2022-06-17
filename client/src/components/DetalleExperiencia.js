import * as React from 'react';
import { Button,Container } from '@mui/material';
import {Grid,Box, Typography} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material'; 
import CustomSeparator from './CustomSeparator.js';
import Content from './LeerMás.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';





export default function DetalleExperiencia () {

  const {userId} = useParams();
  const [data, setData]=useState([]);

  useEffect (()=>{
    axios.get ("http://localhost:3000/experiences")
    .then (response=> {
      const item = response.data.find((dataItem) => dataItem.id === parseInt(dataItem));
      setData(item);
    })
  },[userId])

  console.log (data)


    return (

        
       


  <Grid container style={{backgroundColor:"#FBF1E3"}}>

      <Grid item style={{paddingLeft:"6em"}}>
        <CustomSeparator/>
        <Typography
            variant="body1"
            color= "#2e5137"
            style={{ paddingTop:"1em", fontSize: "1.5rem", fontWeight: "700" }}>
          
          {data.title}</Typography>
      </Grid>   
         <Container style={{display:"flex", flexDirection:"row", width:"90vw",height:"100vh"}}>
          
          <Box style={{display:"flex", marginTop:"3em", width:"90%"}}>
          <img src={data.img} alt="bici" width="442" height="284"/>
         
         <Content/> 
          </Box>

         
         
          <Grid container style= {{ display:"flex", flexDirection:"column", marginTop: "3em", border: "2px solid #2e5137", width:"20em", height:"18em"}}>
  

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


</Grid>
        

    );
    }