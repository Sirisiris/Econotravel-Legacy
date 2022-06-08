import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div> 
         <Main/>
         <Footer />
    </BrowserRouter>

  );
}
export default App;