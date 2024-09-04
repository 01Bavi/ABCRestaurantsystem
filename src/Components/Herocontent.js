import React from 'react'
import '../Styles/Herocontent.css'
import homeImg from '../Assets/images/homeimg.png';


const Herocontent = () => {
  return (
    <div className="home-container" id="homepage">
      <div className="home">
        <h1>It's not just Food, <br />It's an Experience.</h1>
        <p>Delivery To Your Home Or Office, Check Full Menu and Items,<br />Safe and Easy Payment.</p>
        <a className="buttonone" href="#menupage">View Menu</a>
        <a className="buttontwo" href="reserveb.php">Book Table</a>
        
      </div>
      <div className="homeimg">
        <img src={homeImg} alt="abchomeimage" />
      </div>
    </div>
  );
}

export default Herocontent