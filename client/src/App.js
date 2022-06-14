import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Router from './Routes';
import Footer from './components/Footer';
import ExperiencesList from './components/ExperiencesList.js';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
      
        <Router />
     <ExperiencesList/>
   
        <Footer />
    
         </div>
    </BrowserRouter>
   );
}
export default App;