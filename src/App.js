import React, { Component } from 'react';

import Head from './components/Head';

const blue = {
  backgroundColor: '#61dafb',
  height: '100%'
}

class App extends Component {
  render() {
    return (
      <div style={blue}>
        <Head />
      </div>
    );
  }
}

export default App;
