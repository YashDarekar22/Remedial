import React from 'react';
import ProductCard from './ProductCard'; // We will create this next

function ProductList({ products }) {
  return (
    <div className="product-list">
      {/* We map over the 'products' array.
        For each 'product' object, we render a 'ProductCard'.
        We pass the product's data as props to the card.
        The 'key' is crucial for React to track each item.
      */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;