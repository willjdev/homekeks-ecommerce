import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import { useEffect, useState } from "react";


export const NavBar = ({ state }) => {

  const [checkoutCount, setcheckoutCount] = useState( null );

  state.length > 0 ? state.length : null;

  useEffect(() => {
    setcheckoutCount( state.length > 0 ? state.length : null );
  }, [state])
  

  return (
    <header>

      {/* Logo */}
      <Link to={'/'} className="logo-box">
        <img src="../../../public/Assets/Captura de pantalla 2024-03-18 190023.png" alt="logo" />
      </Link>

      {/* Nav Items */}
      <nav className="navbar">
        <ul className="nav-list">
          <Link to={'galletones'} className="list-item">Galletones</Link>
          <Link to={'tortas'} className="list-item">Tortas</Link>
          <Link to={'brownies'} className="list-item">Brownies</Link>
          <Link to={'contacto'} className="list-item">Contacto</Link>
        </ul>
      </nav>

      {/* Cart */}
      <Link to={'carrito'} className="cart">
        <div className="cart-items" style={{ display: checkoutCount ? 'flex' : 'none'}} >{ checkoutCount && checkoutCount}</div>
        <div className="cart-box">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </div>
      </Link>

    </header>
  )
}
