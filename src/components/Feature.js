import React, { useState } from 'react';
import X from './X';
import Check from './Check';
import DropDown from './DropDown';
import FeaturesList from './FeaturesList';

function addLevel(level) {
  return function(feature) {
    return { ...feature, level };
  }
}

export default function Feature({ title, presence, subfeatures, level }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open);
  }
  const hasSubFeatures = !!subfeatures.length;
  const cursor = hasSubFeatures ? 'pointer' : 'inherit';
  const fontSize = `${2 / level}rem`;
  return (
    <li style={{ cursor, fontSize }} onClick={e => toggleOpen(e)}>
      {presence ? <Check /> : <X />}
      <header className="title">{title}</header>
      {hasSubFeatures && <DropDown />}
      {hasSubFeatures && open && <FeaturesList features={subfeatures.map(addLevel(level + 0.5))} />}
    </li>
  );
}

Feature.defaultProps = {
  title: '',
  presence: false,
  subfeatures: [],
  level: 1,
}