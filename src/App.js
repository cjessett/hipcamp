import React, { Component } from 'react';
import FEATURES from './features';
import './App.css';

const initialState = {
  features: FEATURES,
  selected: '',
}

const sortByPresence = (f1, f2) => (f1.presence < f2.presence)

function Check() {
  return <span role="img" aria-label="check">&#9989;</span>;
}

function X() {
  return <span role="img" aria-label="x">&#10060;</span>;
}

function Down({ onClick }) {
  return <span style={{ cursor: 'pointer' }} onClick={onClick} role="img" aria-label="dropdown">&#x25BC;</span>;
}

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState((state) => ({ expand: !state.expand }))
  }
  render() {
    const { title, presence, subfeatures } = this.props;
    return (
      <li style={{ margin: '1em 0 1em' }}>
        {presence ? <Check /> : <X />}
        <h5 style={{ display: 'inline', margin: '0 1em 0 1em' }}>{title}</h5>
        {!!subfeatures.length && <Down onClick={this.toggleOpen} />}
        {this.state.expand && <Features data={subfeatures.sort(sortByPresence)} />}
      </li>
    );
  }
}

function Features({ data }) {
  return (
    <ul className="Features">
    {data.map((props) => <Feature {...props} />)}
    </ul>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    const features = this.state.features.sort(sortByPresence);
    return (
      <div>
        <header className="App-header">Camp Features</header>
        <section id="features"><Features data={features} /></section>
      </div>
    );
  }
}

export default App;
