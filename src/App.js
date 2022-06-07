import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from './Routes';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div> 
         <Main/>
    </BrowserRouter>

  );
}
export default App;