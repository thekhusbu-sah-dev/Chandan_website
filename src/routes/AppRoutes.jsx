import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/products/Products';
import Contact from '../pages/Contact/Contact';
import Tiles from '../pages/products/details/Tiles';
import Bathroom from '../pages/products/details/Bathroom';
import Kitchen from '../pages/products/details/Kitchen';
import Sanitary from '../pages/products/details/Sanitary';
import CategoryPage from '../pages/CategoryPage';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/tiles" element={<Tiles />} />
        <Route path="products/bathroom" element={<Bathroom />} />
        <Route path="products/kitchen" element={<Kitchen />} />
        <Route path="products/sanitary" element={<Sanitary />} />

        <Route path="tiles" element={<CategoryPage categoryKey="tiles" />} />
        <Route path="faucets" element={<CategoryPage categoryKey="faucets" />} />
        <Route path="shower" element={<CategoryPage categoryKey="shower" />} />
        <Route path="sanitaryware" element={<CategoryPage categoryKey="sanitaryware" />} />
        <Route path="pvc-pipes" element={<CategoryPage categoryKey="pvc-pipes" />} />

        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
