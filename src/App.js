import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textLength: 0,
    charList: []
  }

  inputChangeListener = (event) => {
    const txt = event.target.value;
    const len = txt.length;
    const charArray = txt.split('');

    this.setState({
      textLength: len,
      charList: charArray
    });
  }

  deleteComponentListener = (event, index) => {
    let newCharList = [...this.state.charList];
    newCharList.splice(index, 1);
    const newLen = this.state.textLength - 1;

    this.setState({
      textLength: newLen,
      charList: newCharList
    });
  }

  render () {
    const componentList = this.state.charList.map((ch, index) => {
      return (
        <CharComponent 
          key={index}
          char={ch}
          del={(event) => this.deleteComponentListener(event, index)} />
      );
    });

    return (
      <div className="App">
        <input 
          type='text' 
          onChange={this.inputChangeListener} 
          value={this.state.charList.join('')} />
        <div>
          Length of the text: 
          <ValidationComponent txtLength={this.state.textLength} />
        </div>
        {componentList}
      </div>
    );
  }
}

export default App;
