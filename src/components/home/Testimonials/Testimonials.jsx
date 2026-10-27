import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Interior Designer',
    text: 'Chandan Ceramics provides unmatched tile craftsmanship and design varieties. My clients are always amazed.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Homeowner',
    text: 'The sanitaryware and shower fittings transformed our master bathroom into a luxury resort experience.',
    rating: 5
  },
  {
    id: 3,
    name: 'Anil Kulkarni',
    role: 'Architect',
    text: 'Top quality products with fast delivery and high durability. 100% recommended for high-end projects.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials testimonials-section">
      <div className="container">
        <SectionTitle title="Client Testimonials" subtitle="What our happy customers say about us" center={true} />
        
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="star-rating">
                {'★'.repeat(item.rating)}
              </div>
              <p className="testimonial-text">
                "{item.text}"
              </p>
              <h4 className="author-name">{item.name}</h4>
              <span className="author-role">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
