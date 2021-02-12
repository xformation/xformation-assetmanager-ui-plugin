import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { AmazonServices } from './AmazonServices';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/amazonservices`} component={AmazonServices} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('asset-main-container')
    );
  }, 100);
}