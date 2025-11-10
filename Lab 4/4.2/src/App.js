// src/App.js
import './App.css';
import ProductCard from './ProductCard'; // 1. Import our new component

// Our product data (same as before)
const products = [
  {
    id: 1,
    name: 'Classic Leather Wallet',
    price: '$49.99',
    image: 'https://via.placeholder.com/300x300/A9A9A9/FFFFFF?text=Wallet',
  },
  {
    id: 2,
    name: 'Bluetooth Headphones',
    price: '$199.99',
    image: 'https://via.placeholder.com/300x300/696969/FFFFFF?text=Headphones',
  },
  {
    id: 3,
    name: 'Stainless Steel Water Bottle',
    price: '$24.99',
    image: 'https://via.placeholder.com/300x300/D3D3D3/000000?text=Bottle',
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Our Product Gallery</h1>
      </header>
      <main>
        {/* 2. Create the gallery container */}
        <div className="product-gallery">
          {/* 3. Map over the products array */}
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;