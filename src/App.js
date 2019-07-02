import React from 'react';
import FeaturesList from './components/FeaturesList';
import './App.css';

function App({ features }) {
  return (
    <div>
      <header className="App-header">Camp Features</header>
      <section id="features">
        <FeaturesList features={features} />
      </section>
    </div>
  );
}

export default App;
