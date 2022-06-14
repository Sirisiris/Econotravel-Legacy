import { useRoutes } from "react-router-dom";
import Main from "./components/Main";
import Experiences from "./components/Experiences";
import Login from "./components/Login";
import Register from "./components/Register";
import QuienesSomos from './components/QuienesSomos';
import ComoFunciona from './components/ComoFunciona';
import MediosPago from './components/MediosPago';
import Experiencedetail from './components/Experiencedetail';
import Carrito from './components/Carrito'

export default function Router() {
    let element = useRoutes([
      {
        element: <Main/>,
        path: "/"
      },
      {
        element: <Experiences />,
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
        element: <Experiencedetail />,
        path: "/experiencesdetail"
      },
      {
        element: <Carrito />,
        path: "/carrito"
      }
    ]);
  
    return element;
  }