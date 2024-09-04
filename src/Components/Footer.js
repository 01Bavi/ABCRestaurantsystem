import React from 'react';
import '../Styles/Footer.css';
import logo from '../Assets/images/logo.png';

function Footer() {
  return (
    
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-container content flex-design">
            <div className="logo">
              <img src={logo} alt="Signature Cuisine" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; ABCRestaurant</p>
        </div>
      </div>
    
  );
}

export default Footer;
