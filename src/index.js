import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css';

import App from './pages/App';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
