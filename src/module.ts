import {
  Environments,
  AmazonServices,
  Kubernetes,
  StorageDetails,
  AccountSetup
} from "./ui";
import { ConfigCtrl } from "./ConfigCtrl";

// import { loadPluginCss } from '@grafana/runtime';
// Patch since @grafana/runtime is giving error on build
declare const window: any;
export function loadPluginCss() {
  if (window.grafanaBootData.user.lightTheme) {
    require("./css/assetmanager.light.css");
    require("./css/servicedesk.light.css");
    // require("./css/logmanager.light.css");
  } else {
    require("./css/assetmanager.dark.css");
    require("./css/servicedesk.dark.css");
    // require("./css/logmanager.dark.css");
  }
}

loadPluginCss();

export {
  ConfigCtrl,
  Environments,
  AmazonServices,
  Kubernetes,
  StorageDetails,
  AccountSetup
};
