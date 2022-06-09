import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Router from './Routes';
import Footer from './components/Footer';
import ExperienceDetail from './components/ExperienceDetail';
import Experiences from './components/Experiences.js';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
       
        <Router />
        <Experiences/>
        <Footer />
  
         </div>
    </BrowserRouter>
   );
}
export default App;