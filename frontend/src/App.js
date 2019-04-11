import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import './App.css';

import LandingPage from './Components/LandingPage';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>
  </BrowserRouter>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Main store={this.props.store} />      
      </div>
    );
  }
}

export default App;
