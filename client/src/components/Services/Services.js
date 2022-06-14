import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";



export default function ExperiencesList () {

    const [data, setData]=useState([]);
    
    useEffect (()=>{
      axios.get ("http://localhost:3001")
      .then (response=> {
        console.log (response)
        setData (response.data)
      })
    })
    
     
      return (
 <div>
     <ul>
     {data.map(data=><li>{data.id}</li>)}

     </ul>
 </div>



      )}

console.log (ExperiencesList)