import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Landing from '../Landing';
import Planes from '../Planes';
import Navigation from '../../components/Navigation';

import Form from '../../components/Form';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    color: #fff;
    background-color: #444;
  }
`;

const UIApp = styled.div.attrs({
  className: 'ui-app',
})`
  position: relative;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <UIApp className="ui-app">
          <Navigation />
          <Route exact path="/" component={Landing} />
          <Route path="/planes" component={Planes} />
          <Route path="/form" component={Form} />
        </UIApp>
      </React.Fragment>
    );
  }
}

export default App;
