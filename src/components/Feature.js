import React, { Component } from 'react';
import X from './X';
import Check from './Check';
import DropDown from './DropDown';
import FeaturesList from './FeaturesList';
import { sortByPresence } from '../utils';

export default class Feature extends Component {
  constructor() {
    super();
    this.state = { expand: false };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  toggleDropDown() {
    this.setState((state) => ({ expand: !state.expand }))
  }
  render() {
    const { title, presence, subfeatures } = this.props;
    const hasSubFeatures = !!subfeatures.length;
    return (
      <li>
        {presence ? <Check /> : <X />}
        <h5 className="title">{title}</h5>
        {hasSubFeatures && <DropDown onClick={this.toggleDropDown} />}
        {this.state.expand && <FeaturesList data={subfeatures.sort(sortByPresence)} />}
      </li>
    );
  }
}