import { useRoutes } from "react-router-dom";
import Main from "./components/Main";
import ExperiencesList from "./components/ExperiencesList";
import Login from "./components/Login";
import Register from "./components/Register";
import QuienesSomos from './components/QuienesSomos';
import ComoFunciona from './components/ComoFunciona';
import MediosPago from './components/MediosPago';
import DetalleExperiencia from "./components/DetalleExperiencia";
import Carrito from "./components/Carrito";
import PruebaBarra from "./components/PruebaBarra"

export default function Rutas () {
    let element = useRoutes([
      
      {
        element: <Main/>,
        path: "/"
      },
      {
        element: <ExperiencesList />,
        path: "/experiences"
      },
      {
        element: <Login />,
        path: "/login"
      },
      {
        element: <QuienesSomos />,
        path: "/nosotros"
      },
      {
        element: <ComoFunciona />,
        path: "/comofunciona"
      },
      {
        element: <MediosPago />,
        path: "/mediospago"
      },
      {
        element: <Register />,
        path: "/register"
      },
      
      {
        element: <DetalleExperiencia/>,
        path:"/descripción"
      },
      
      {
        element: <Carrito/>,
        path:"/carrito"
      },

      {
        element: <PruebaBarra/>,
        path:"/prueba"
      }
    ]);
  
    return element;
  }