import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StorageDetails } from './StorageDetails';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/storagedetails`} component={StorageDetails} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('asset-main-container')
    );
  }, 100);
}