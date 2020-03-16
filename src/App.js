import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    textLength: 0
  }

  inputChangeListener = (event) => {
    const txt = event.target.value;
    const len = txt.length;

    this.setState({textLength: len});
  }

  render () {
    return (
      <div className="App">
        <input type='text' onChange={this.inputChangeListener} />
        <p>
          Length of the text: 
          <ValidationComponent txtLength={this.state.textLength} />
        </p>
      </div>
    );
  }
}

export default App;
