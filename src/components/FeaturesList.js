import React from 'react';
import Feature from './Feature';

export default function FeaturesList({ features }) {
  const sortedFeatures = features.sort((a, b) => a.presence < b.presence);
  return (
    <ul>
    {sortedFeatures.map((props) => <Feature key={props.title} {...props} />)}
    </ul>
  )
}