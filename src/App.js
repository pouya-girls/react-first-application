import React, { Component } from 'react';
import logo from './logo.svg';
import image from './aero_light_colors_6-wallpaper-1920x1200.jpg'
import './App.css';
import Form from './PhoneBook/FormContainerComponent'
import Table from './PhoneBook/TableContainerComponent'
import EditFrom from './PhoneBook/EditFromContainerComponent'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
          <div style={{backgroundImage: 'url(' + image + ')', height: '100%'}}>
              <Link to={'/add'}>Add</Link>
              <Link to={'/'}>Home</Link>

              <Route exact path={'/'} component={Table}/>
              <Route path={'/add'} component={Form}/>
              <Route path={'/edit'} component={EditFrom}/>
          </div>
    );
  }
}

export default App;
