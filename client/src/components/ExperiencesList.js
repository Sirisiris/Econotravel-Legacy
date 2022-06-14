import React from 'react';
import { Button,Container, Chip } from '@mui/material';
import {Grid,Box} from "@mui/material";
import { useEffect,useState } from 'react';
import axios from "axios";


export default function ExperiencesList (){

  
  const [data, setData]=useState([]);
    
  useEffect (()=>{
    axios.get ("http://localhost:3002/experiences")
    .then (response=> {
      setData (response.data)
    })
  },[])

  console.log (data)

/*
return (
 
<div className='Catalogo'>

  {data.map (data=> {
    return(
      <div key={data.id}>
      <h1>{data.title}</h1>
   </div> )
  })}
</div>
  )}
*/



return (

           
        <Grid container style= {{ backgroundColor: '#fbf1e3'}}>
   

   
   {data.map(data=>
    

    
      
      <Container style={{ marginTop:"6em" }}>
    
        
        <img src={data.img}
        width= "249"
          alt="bike"></img>
        <Box style={{marginTop:"0.5em"}}>
        <Chip label={data.tag1} variant="outlined" style={{width:"80px",height:"25px"}}/>
        <Chip label={data.tag2} variant="outlined"style={{width:"80px", height:"25px", marginLeft:"0.5em"}} />
        <Chip label={data.tag3} variant="outlined" style={{width:"80px",height:"25px", marginLeft:"0.5em"}}/>
        <h1 style={{fontSize:"1.2em", color:"#2e5137", marginTop:"1em"}}>{data.tag1}</h1>
        <h2 style={{fontSize:"1em",fontWeight:"200", color:"#2e5137" }} >{data.price}€/persona</h2>
        
        </Box>
        <Button style={{
              backgroundColor: "#2e5137", borderRadius:"50px", color:"white", marginLeft:"10em", marginTop:"-5em",textTransform:"none"}} size="small">
          Reserva ahora
        </Button>
     
    
</Container>

)}
 </Grid>

 )}

  

      
        
        
      
  

         
