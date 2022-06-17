import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Rutas from './Routes';
import Footer from './components/Footer';


function App() {
  return (

    <BrowserRouter>

        <NavBar />
        
        <Rutas />
        
   
        <Footer />

         

    </BrowserRouter>
   );
}
export default App;