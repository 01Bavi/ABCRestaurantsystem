import React from 'react';
import '../Styles/Gallery.css';

function GalleryPage() {
  return (
    <div className="gallery-container" id="gallerypage">
      <div className="gallery">
        <div className="gallerybox">
          <img src={require('../Assets/images/biryani.jpg')} alt="Biryani" />
        </div>
        {/* Other gallery images */}
      </div>
    </div>
  );
}

export default GalleryPage;
