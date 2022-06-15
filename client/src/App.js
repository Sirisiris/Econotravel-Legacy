import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Router from './Routes';
import Footer from './components/Footer';

function App() {
  return (

    <BrowserRouter>

        <NavBar />
        <Router />
   
        <Footer />
    

    </BrowserRouter>
   );
}
export default App;