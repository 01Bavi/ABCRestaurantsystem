import React from 'react';
import '../Styles/Services.css';

function ServicesPage() {
  return (
    <section className="services mt mb" id="servicepage">
      <div className="heading">
        <h2>OUR SERVICES</h2>
      </div>
      <div className="service-content content">
        <div className="service servingfood">
          <div className="service_img">
            <img src={require('../Assets/images/waiter.jpg')} alt="Serving Food" />
          </div>
          <div className="service_content">
            <h3>SERVING FOOD</h3>
          </div>
        </div>
        {/* Other services */}
      </div>
    </section>
  );
}

export default ServicesPage;
