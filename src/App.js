import React, { Component } from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Nested from './containers/Nested';
import List from './containers/List';

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Layout><Home /></Layout>}/>
        <Route exact path="/nested" render={() => <Layout><Nested /></Layout>}/>
        <Route exact path="/list" render={() => <Layout><List /></Layout>}/>
      </Switch>
    </BrowserRouter>
    );
  }
}