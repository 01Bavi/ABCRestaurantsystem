import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <h1>ABC Restaurant</h1>
        </div>
        <ul className="nav">
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
