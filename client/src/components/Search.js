import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Chip, Button, Container, Grid, Box } from "@mui/material";







export default function Catalogo (){

const [data, setData]= useState ([]);
const [loading, setLoading] = useState (false);
const [search, setSearch]= useState ("");
const [filteredExperiencias, setFilteredExperiencias]= useState([]);



useEffect (() => {
  setLoading (true);
axios.get ("http://localhost:3000/experiences")
  .then ((response)=> {
    setData (response.data);
    setLoading (false);
})
.catch (error=> {
  console.log (error);
});
}, []);



useEffect (()=>{
  setFilteredExperiencias(
    data.filter (data=>{
  return data.title.toLowerCase().includes(search.toLowerCase())
})
  )
}, [search, data])



if (loading){
  return <p>....Loading experiences...</p>;
}

 
return (
  <div className= "Catálogo">
      <h1>Experiences List</h1>
     
      <input type="text" placeholder="Search..." onChange={ e=> setSearch(e.target.value)}></input>
 
    </div>  
  )
}
/*</div>  {filteredExperiencias.map= ((data,id)=>(
    
    <Card key={id} style={{ marginTop:"6em" }}>

    
</div>*/








    








    
    
    
    
    
    
  
  
