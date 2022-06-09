import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import QuienesSomos from './components/QuienesSomos';
import Experiences from './components/Experiences.js';
import Experiencedetail from "./components/Experiencedetail.js";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
       
         <Main/>
         <Footer />
  
         </div>
    </BrowserRouter>
   );
}
export default App;