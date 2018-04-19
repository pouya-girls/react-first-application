import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './PhoneBook/FormContainerComponent'
import Table from './PhoneBook/TableContainerComponent'
import EditFrom from './PhoneBook/EditFromContainerComponent'

class App extends Component {
  render() {
    return (
      <div>
          <Table/>
          <br/><br/>
          <Form/>
          <br/><br/>
          <EditFrom/>
      </div>
    );
  }
}

export default App;
