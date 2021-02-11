import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Service } from './Service';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/service`} component={Service} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('asset-main-container')
    );
  }, 100);
}