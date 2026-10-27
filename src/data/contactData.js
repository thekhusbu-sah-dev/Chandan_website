import { SITE_INFO } from '../utils/constants';

export const contactData = {
  heroTitlePart1: "Get In",
  heroTitlePart2: "Touch",
  heroSubtitle: "We would love to hear from you. Reach out to our ceramic experts today.",
  infoCards: [
    {
      id: "address",
      title: "Our Showroom",
      icon: "fas fa-map-marker-alt",
      details: [SITE_INFO.address]
    },
    {
      id: "phones",
      title: "Call Us",
      icon: "fas fa-phone-alt",
      details: ["+91 98765 43210", "+91 91234 56789"]
    },
    {
      id: "email",
      title: "Email Address",
      icon: "fas fa-envelope",
      details: [SITE_INFO.email]
    }
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.9141193153805!3d18.56225398738282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fd775764fc8b9!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
};

export default contactData;
