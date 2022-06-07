import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from './Routes';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Router/>
      </div>
    </BrowserRouter>
  );
}
export default App;