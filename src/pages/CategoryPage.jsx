import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { subcategoriesData } from '../data/productsData';
import SubcategoryHero from '../components/subcategory/SubcategoryHero';
import TabbedGrid from '../components/subcategory/TabbedGrid';
import NotFoundPage from './NotFoundPage';

const CategoryPage = ({ categoryKey: propCategoryKey }) => {
  const { category: paramCategoryKey } = useParams();
  const location = useLocation();

  // Determine category key from prop, param, or pathname
  let categoryKey = propCategoryKey || paramCategoryKey;
  if (!categoryKey) {
    categoryKey = location.pathname.replace('/', '');
  }

  const categoryData = subcategoriesData[categoryKey];

  if (!categoryData) {
    return <NotFoundPage />;
  }

  return (
    <div className="category-page">
      <SubcategoryHero
        titlePart1={categoryData.heroTitlePart1}
        titlePart2={categoryData.heroTitlePart2}
        subtitle={categoryData.heroSubtitle}
      />
      <TabbedGrid tabs={categoryData.tabs} items={categoryData.items} />
    </div>
  );
};

export default CategoryPage;
