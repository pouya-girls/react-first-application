import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Table from './Table'

class App extends Component {
    constructor(props) {
        super(props)

        this._updatePhoneBook = this._updatePhoneBook.bind(this)

        this.state = {
            phoneBook: []
        }
    }

    _updatePhoneBook(item) {
        this.setState({
            phoneBook: [...this.state.phoneBook, item]
        })
    }


  render() {
    return (
      <div>
          <Table pb={this.state.phoneBook}/>
          <br/><br/>
          <Form zameZakhireSazi={this._updatePhoneBook}/>
      </div>
    );
  }
}

export default App;
