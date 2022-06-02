import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="search"> Search</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
