import React, { useState } from 'react';
import X from './X';
import Check from './Check';
import DropDown from './DropDown';
import FeaturesList from './FeaturesList';

function withLevel(level) {
  return function(feature) {
    return { ...feature, level };
  }
}

export default function Feature({ title, presence, subfeatures, level }) {
  const [open, setOpen] = useState(false);
  const hasSubFeatures = !!subfeatures.length;
  const fontSize = `${2 / level}rem`;
  const cursor = hasSubFeatures ? 'pointer' : 'inherit';
  const features = subfeatures.map(withLevel(level + 0.5));
  return (
    <li style={{ fontSize }}>
      <span style={{ cursor }} onClick={() => setOpen(!open)}>
        {presence ? <Check /> : <X />}
        <header className="title">{title}</header>
        {hasSubFeatures && <DropDown />}
      </span>
      {open && <FeaturesList features={features} />}
    </li>
  );
}

Feature.defaultProps = {
  title: '',
  presence: false,
  subfeatures: [],
  level: 1,
}