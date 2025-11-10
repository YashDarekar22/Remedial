import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { products } from './product-data'; // Import our product data

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Modern Essentials</h1>
        <p>Our Latest Collection</p>
      </header>
      
      <main>
        {/* Pass the list of products down to the ProductList component */}
        <ProductList products={products} />
      </main>

      <footer className="app-footer">
        <p>© 2025 Product Gallery</p>
      </footer>
    </div>
  );
}

export default App;