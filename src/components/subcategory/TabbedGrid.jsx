import React, { useState } from 'react';
import ProductCard from '../common/ProductCard';

const TabbedGrid = ({ tabs, items }) => {
  const [activeTab, setActiveTab] = useState(tabs && tabs.length > 0 ? tabs[0].id : null);

  // If tabs exist, render active tab items, otherwise render flat items array
  const displayItems = tabs && tabs.length > 0 ? items[activeTab] || [] : items;

  return (
    <>
      {tabs && tabs.length > 0 && (
        <div className="tabs-container">
          <div className="tabs-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <section className="tiles-grid-section faucets-grid-section">
        <div className="tiles-grid faucets-grid">
          {displayItems.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              img={product.img}
              specs={product.specs}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TabbedGrid;
