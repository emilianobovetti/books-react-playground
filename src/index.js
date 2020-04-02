import React from 'react';
import ReactDOM from 'react-dom';

/* global document */

class Main extends React.Component {
  render () {
    return <p>hello, world</p>;
  }
}

const rootNode = document.getElementById('react-root');

ReactDOM.render(<Main/>, rootNode);
