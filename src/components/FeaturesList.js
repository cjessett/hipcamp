import React from 'react';
import Feature from './Feature';

export default function FeaturesList({ data }) {
  return (
    <ul>
    {data.map((props) => <Feature key={props.title} {...props} />)}
    </ul>
  )
}