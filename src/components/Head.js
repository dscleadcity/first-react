import React from 'react';

import Welcome from './views/welcomeMessage';

const hi = {
  color: '#f0f0f0'
}

class Head extends React.Component {
  render() {
    return(
      <div style={hi}>
        <Welcome />
      </div>
    );
  }
}

export default Head;
