import React, { createContext, useState } from 'react';
import { products } from '../data/products';
import { categories } from '../data/categories';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(products);
  const [categoryList] = useState(categories);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setProductList(products);
    } else {
      setProductList(products.filter((p) => p.category === category));
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: productList,
        categories: categoryList,
        selectedCategory,
        filterByCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
