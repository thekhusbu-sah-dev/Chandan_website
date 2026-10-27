import React from 'react';
import ContactHero from '../../components/contact/ContactHero';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import MapSection from '../../components/contact/MapSection';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHero />

      <section className="contact-container">
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <MapSection />
    </div>
  );
};

export default Contact;
