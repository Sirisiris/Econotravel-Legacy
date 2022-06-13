import { useRoutes } from "react-router-dom";
import Main from "./components/Main";
import Experiences from "./components/Experiences";
import Login from "./components/Login";
import Register from "./components/Register";
import QuienesSomos from './components/QuienesSomos';
import ComoFunciona from './components/ComoFunciona';
import MediosPago from './components/MediosPago'
import ExperienceDetail from "./components/Experiencedetail";
import FormularioReserva from './components/FormularioReserva';

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
        element: <ExperienceDetail />,
        path: "/experiencedetail"
      },
      {
        element: <FormularioReserva />,
        path: "/reserva"
      }
    ]);
  
    return element;
  }