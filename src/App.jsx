import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProductProvider } from './context/ProductContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
