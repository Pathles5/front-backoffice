import './NavBar.css'
import { NavLink } from "./NavLink";

export const NavBar = ()=>(
  // <div>
    <nav className = 'navbar'>
      <div className = 'navLogo'>
        <h3>OTIAUTO</h3>
      </div>
      
      <ul>
        <li>
          <NavLink to="/">Inicio </NavLink>
        </li>
        <li>
          <NavLink to="/clients">Clientes </NavLink>
        </li>
        <li>
          <NavLink to="/invoices">Facturas</NavLink>
        </li>
      </ul>
      <div className = 'navExit'>
        <NavLink to="/logout">
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
          </svg>
        </NavLink>
      </div>
    </nav>
  // </div>
);