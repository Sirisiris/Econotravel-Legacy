import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Router from './Routes';
import Footer from './components/Footer';
import FetchExperiencias from './components/FetchExperiencias';
import Rutas from './Routes';
import ExperiencesList from './components/ExperiencesList';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Rutas />
   
        <Footer />
    
         </div>
    </BrowserRouter>
   );
}
export default App;