import React, { Component } from 'react';
import Timer from './Timer/Timer';
import './Styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Timer />

      </div>
    );
  }
}

export default App;
