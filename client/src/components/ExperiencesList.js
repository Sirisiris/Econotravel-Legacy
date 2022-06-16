import React from 'react';
import { Button,Container, Chip } from '@mui/material';
import {Grid,Box} from "@mui/material";
import { useEffect,useState } from 'react';
import axios from "axios";





export default function ExperiencesList (){


  const [loading, setLoading] = useState (false);
  const [search, setSearch]= useState ("");
  const [filteredExperiencias, setFilteredExperiencias]= useState([]);


  const [data, setData]=useState([]);
    
  useEffect (()=>{
    axios.get ("http://localhost:3000/experiences")
    .then ((response)=> {
      setData (response.data)})},[data])
      
  
     
      

  
  /*const searchText= ("input"||"");

  


  

*/



/*
 const [searchParams,setSearchParams ]= useSearchParams();
  const searchTerm= ("input"||"");

  
  const [data, setData]=useState([]);
    
  useEffect (()=>{
    axios.get (`${process.env.REACT_APP_URL}/experiences`)
    .then (response => {
      console.log (response.data)
      setData (response.data.filter(e=>e.title.toLowerCase().includes(searchTerm)))
    })
  },[searchTerm])
*/

 

return (

           
        <Grid container style= {{ backgroundColor: '#fbf1e3'}}>
   

   
      {data.map((data,id)=>
    
      
      <Container style={{ marginTop:"6em" }} key={id}>
    
        
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
     
    
</Container>)
}

 </Grid>

 )}
       
    

  

      
        
        
      
  

         
