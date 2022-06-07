import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from './Routes';
import NavBar from './components/NavBar';
import Experiences from "./components/Experiences.js"
function App() {
  return (
<>
    <BrowserRouter>
    
        <NavBar/>
        <Router/>  
    </BrowserRouter>
   
    </>
  );
}
export default App;