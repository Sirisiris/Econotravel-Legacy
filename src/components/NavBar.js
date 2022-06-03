import { Link, Outlet } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';


export default function NavBar() {
  return (
    <>
      <nav className="nav-bar" >
        <ul style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <li>
            <Link to="/"><img src={Logo} style={{width: "30%"}} className="logo" alt="Logo" /></Link>
          </li>
          <li>
            <Link to="search"> Search</Link>
          </li>
          <li>
            <Link to="login"><AccountCircleIcon /> Login</Link>
          </li>
          <li>
            <Link to="shopping"><ShoppingCartIcon /> Shopping</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
