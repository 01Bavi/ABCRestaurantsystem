import React from 'react';
import '../Styles/Facilities.css';

function Facilities() {
  return (
    <section className="facility" id="facilitypage">
      <div className="heading">
        <h2>OUR FACILITIES</h2>
      </div>
      <div className="facility-content content">
        <div className="faci">
          <div className="facility-image">
            <img src={require('../Assets/images/outdoor.jpg')} alt="Outdoor Seating" />
          </div>
          <div className="facility-text">
            <h3>Outdoor seating</h3>
          </div>
        </div>
        {/* Other facilities */}
      </div>
    </section>
  );
}

export default Facilities;
