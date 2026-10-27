import React from 'react';
import { homeGalleryArtworks } from '../../../data/homeData';
import SectionTitle from '../../common/SectionTitle';
import './InfiniteGallery.css';

const InfiniteGallery = () => {
  const displayItems = [...homeGalleryArtworks, ...homeGalleryArtworks];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-10px)`;
    card.style.transition = 'transform 0.08s ease';
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
  };

  const handleClick = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'section4-card-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    card.appendChild(ripple);

    setTimeout(() => {
      ripple.style.transform = 'scale(40)';
      ripple.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 500);
  };

  return (
    <div className="section4-cosmic-section">
      <div className="section4-gallery-vortex">
        <SectionTitle part1="Our" part2="Gallery" center={true} />

        <div className="section4-infinite-stage">
          <div className="section4-magnetic-track" id="infiniteTrack">
            {displayItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="section4-art-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                <img src={item.img} alt={item.alt} loading="lazy" />
                <div className="section4-card-mystic"></div>
                <div className="section4-card-insight">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteGallery;
