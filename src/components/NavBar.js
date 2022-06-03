import { Link, Outlet } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/logo.png';

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/"><img className="logo" src={Logo} alt="Logo" /> Home</Link>
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
