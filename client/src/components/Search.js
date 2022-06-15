import React, { Component } from 'react';
import FetchExperiencias from './FetchExperiencias';

export default function SearchComponent () {
 
  

const [data, setData]=useState([])
 const [search, setSearch] = useState ("")   

 const API= `${process.env.REACT_APP_URL}/experiences`
    axios.get (`${process.env.REACT_APP_URL}/experiences`)
    .then (response=> {
      setData (response.data)
    })
}


  const searcher = (e)=> {
    setSearch (e.target.value)
  }
  
  useEffect ( ()=> {
  FetchExperiencias ()
  }, [])
  
  
  let results= [];
  if (!search)
  { results= FetchExperiencias
  
  } else {
    results = FetchExperiencias.filter ((data =>
    data.name.toLowerCase().includes (search.toLocaleLowerCase()))
  )
  }

 