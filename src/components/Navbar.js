import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container" style={{marginLeft: '0'}}>
        <a className="navbar-brand" href="/" style={{fontSize: '35px'}}>AlquiFincas</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/carrito">
              <i class="bi bi-cart-check"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;