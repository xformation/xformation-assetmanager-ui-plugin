import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { AccountSetup } from "../../pages/AccountSetup";
import { AmazonServices } from "../../pages/AmazonServices";
import { Environments } from "../../pages/Environments";
import { Kubernetes } from "../../pages/Kubernetes";
import { StorageDetails } from "../../pages/StorageDetails";
import { useNavigation, prefixRoute } from "../../utils/utils.routing";
import { ROUTES } from "../../constants";

export const Routes = () => {
  useNavigation();

  return (
    <Switch>
      <Route exact path={prefixRoute(ROUTES.Environments)} component={Environments} />
      <Route exact path={prefixRoute(ROUTES.AccountSetup)} component={AccountSetup} />
      <Route exact path={prefixRoute(ROUTES.AmazonServices)} component={AmazonServices} />
      <Route exact path={prefixRoute(ROUTES.Kubernetes)} component={Kubernetes} />
      <Route exact path={prefixRoute(ROUTES.StorageDetails)} component={StorageDetails} />
    </Switch>
  );
};
