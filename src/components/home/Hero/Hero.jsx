import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroSlidesData } from '../../../data/homeData';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="video-hero">
      {heroSlidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`video-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <video autoPlay muted loop playsInline key={slide.videoSrc}>
            <source src={slide.videoSrc} type="video/mp4" />
          </video>
          <div className="overlay"></div>

          <div className="hero-content">
            <div className="split-heading">
              <span className="half-1">{slide.titlePart1}</span>
              <span className="half-2">{slide.titlePart2}</span>
            </div>
            <br />
            <Link to={slide.buttonLink} className="btn-hero">
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      <div className="slider-dots">
        {heroSlidesData.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
