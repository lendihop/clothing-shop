import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="categories-container">
        <div className="category-container">
          {/*<img/>*/}
          <div className="category-body-container">
            <h2>Hats</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          {/*<img/>*/}
          <div className="category-body-container">
            <h2>Jackets</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          {/*<img/>*/}
          <div className="category-body-container">
            <h2>Sneakers</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          {/*<img/>*/}
          <div className="category-body-container">
            <h2>Womens</h2>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="category-container">
          {/*<img/>*/}
          <div className="category-body-container">
            <h2>Mans</h2>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
