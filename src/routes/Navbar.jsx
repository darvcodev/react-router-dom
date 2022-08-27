import * as React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <Link className="botonSuperior" to="/inicio">
        Inicio
      </Link>
      <Link className="botonSuperior" to="/html">
        HTML
      </Link>
      <Link className="botonSuperior" to="/css">
        CSS
      </Link>
      <Link className="botonSuperior" to="/js">
        JS
      </Link>
      <Link className="botonSuperior" to="/react">
        React
      </Link>
    </>
  );
};
