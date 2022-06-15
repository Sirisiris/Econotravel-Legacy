import { useRoutes,} from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import QuienesSomos from './components/QuienesSomos';
import ComoFunciona from './components/ComoFunciona';
import MediosPago from './components/MediosPago'
import ExperiencesList from "./components/ExperiencesList";
import DetalleExperiencia from "./components/DetalleExperiencia";
import RutaPrivada from "./components/RutaPrivada";

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
        element: <RutaPrivada/>,
        path: "/rutaprivada"
      }
    ]);
  
    return element;
  }