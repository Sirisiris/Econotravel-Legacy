import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Rutas from './Routes';
import Catalogo from './components/Search';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Rutas />
   <Catalogo/>
        <Footer />
    
         </div>
    </BrowserRouter>
   );
}
export default App;