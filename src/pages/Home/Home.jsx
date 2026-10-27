import React from 'react';
import Hero from '../../components/home/Hero';
import CategoriesShowcase from '../../components/home/CategoriesShowcase';
import AboutPreview from '../../components/home/AboutPreview';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Testimonials from '../../components/home/Testimonials';
import InfiniteGallery from '../../components/home/InfiniteGallery';
import HomeBanner from '../../components/home/HomeBanner';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CategoriesShowcase />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <InfiniteGallery />
      <HomeBanner />
    </div>
  );
};

export default Home;
