import React from 'react';
import '../Styles/Menu.css';

function MenuPage() {
  return (
    <div className="menu-container" id="menupage">
      <h1> Most Popular</h1>
      <p>Try our most popular items.</p>
      <div className="menu">
        <div className="menu-item">
          <img src={require('../Assets/images/chana-masala.jpg')} alt="Chana Masala" />
          <h3>Dish 1</h3>
          <p>Price: Rs850</p>
        </div>
        <div className="menu-item">
          <img src={require('../Assets/images/biryani.jpg')} alt="biryani" />
          <h3>Dish 2</h3>
          <p>Price: Rs850</p>
        </div>
        
      </div>
    </div>
  );
}

export default MenuPage;
