import React, { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = ({ images = [], mainImage }) => {
  const allImages = images.length > 0 ? images : [mainImage || '/assets/Images/d1.jpg'];
  const [selectedImg, setSelectedImg] = useState(allImages[0]);

  return (
    <div className="product-gallery">
      <div className="main-image-box">
        <img src={selectedImg} alt="Product detail" />
      </div>

      {allImages.length > 1 && (
        <div className="gallery-thumbnails">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              className={`thumbnail-item ${selectedImg === img ? 'active' : ''}`}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Thumb ${idx}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
