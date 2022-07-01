

import axios from "axios"


export default function FetchExperiencias () {

    return (
    axios.get (`${process.env.REACT_APP_URL}/experiences`)
    .then ((response)=>{
     console.log (response.data)

    }),[]) 
}
console.log (FetchExperiencias)



