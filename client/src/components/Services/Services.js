import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";



export default function ExperiencesList () {

    const [data, setData]=useState([]);
    
    useEffect (()=>{
      axios.get ("http://localhost:3000")
      .then (response=> {
        console.log (response)
        setData (response.data)
      })
    })
    
     
      return (
 <>
     <ul>
     {data.map(data=><li>{data.id}</li>)}

     </ul>
 </>



      )}

console.log (ExperiencesList)