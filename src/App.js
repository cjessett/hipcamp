import React from 'react';
import FeaturesList from './components/FeaturesList';
import './App.css';
import { sortByPresence } from './utils';

function App(props) {
  const features = props.features.sort(sortByPresence);
  return (
    <div>
      <header className="App-header">Camp Features</header>
      <section id="features">
        <FeaturesList data={features} />
      </section>
    </div>
  );
}

export default App;
