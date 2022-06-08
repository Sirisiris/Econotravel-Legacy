import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import QuienesSomos from './components/QuienesSomos';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div> 
      <QuienesSomos />
         <Main/>
         <Footer />
    </BrowserRouter>

  );
}
export default App;