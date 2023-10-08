import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/lista">Lista de Datos</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
