import { useRoutes } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";

export default function Router() {
    let element = useRoutes([
      {
        element: <Main/>,
        path: "/"
      },
      {
        element: <Search />,
        path: "search"
      }
    ]);
  
    return element;
  }