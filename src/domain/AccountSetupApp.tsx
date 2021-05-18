import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { AccountSetup } from './AccountSetup';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/accountsetup`} component={AccountSetup} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('asset-main-container')
    );
  }, 100);
}