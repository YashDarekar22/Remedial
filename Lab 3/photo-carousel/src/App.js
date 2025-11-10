import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import { slides } from './carousel-data'; // Import our slide data

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Photo Carousel</h1>
      </header>
      
      <main>
        {/* Pass the array of slides as a prop */}
        <Carousel slides={slides} />
      </main>
    </div>
  );
}

export default App;