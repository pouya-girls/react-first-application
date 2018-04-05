import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this._btnClickMeClicked = this._btnClickMeClicked.bind(this)

        this.state = {
            text: "Hello"
        }
    }

  render() {
    return (
      <div>
          <h1 className={"textCenter"}>{this.state.text}</h1>
          <button onClick={this._btnClickMeClicked}>Click me!</button>
      </div>
    );
  }

  _btnClickMeClicked() {
      this.setState({
          text: "Bye!"
      });
  }
}

export default App;
