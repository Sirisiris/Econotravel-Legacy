import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Router from './Routes';
import Footer from './components/Footer';
import ShowData from './components/ShowData';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <ShowData />
        <Router />
        <Footer />
  
         </div>
    </BrowserRouter>
   );
}
export default App;