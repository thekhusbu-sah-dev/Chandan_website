import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../common/Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppFloat from './WhatsAppFloat';
import TopBar from './TopBar';

const MainLayout = () => {
  return (
    <div className="app-container">
      <TopBar />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
};

export default MainLayout;
