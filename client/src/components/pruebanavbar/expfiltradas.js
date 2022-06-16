import CardList from './components/pruebanavbar/cardlist';
import SearchBar from './components/pruebanavbar/searchbar';
import axios from 'axios';
import { useState, useEffect } from 'react';

function ExpFiltradas() {
  const [state, setState] = useState({
    results: [],
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/experiences").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);
  
  setState((prevState) => {
        return { ...prevState, data: data };
      });
  
    return (

        <div className="container searchApp">

          <SearchBar useEffect={useEffect} />
          <CardList results={state.data} />
          </div>
    )
          }