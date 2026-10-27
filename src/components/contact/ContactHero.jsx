import React from 'react';
import './ContactHero.css';

const ContactHero = ({
  titlePart1 = "Get In",
  titlePart2 = "Touch",
  subtitle = "We would love to hear from you. Reach out to our ceramic experts today."
}) => {
  return (
    <section className="contact-hero tiles-hero faucets-hero contact-hero-section">
      <div className="container">
        <h1 className="hero-title">
          {titlePart1} <span>{titlePart2}</span>
        </h1>
        {subtitle && (
          <p className="hero-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactHero;
