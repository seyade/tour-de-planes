import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Landing from '../Landing';
import Plane from '../Plane';

const GlobalStyle = createGlobalStyle`
  body {
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

const UINav = styled.nav`
  font-family: 'Lato', sans-serif;

  a {
    margin-right: 16px;
    color: #fff;
    text-decoration: none;
    transition: all 300ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

class App extends Component {
  renderNavigation() {
    return (
      <UINav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/plane">A350 card</Link>
      </UINav>
    );
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <UIApp className="ui-app">
          {this.renderNavigation()}
          <Route exact path="/" component={Landing} />
          <Route path="/plane" component={Plane} />
        </UIApp>
      </React.Fragment>
    );
  }
}

export default App;
