import { Environments, AmazonServices, Kubernetes, StorageDetails } from "./ui";
import { ConfigCtrl } from "./ConfigCtrl";

// import { loadPluginCss } from '@grafana/runtime';
// Patch since @grafana/runtime is giving error on build
declare const window: any;
export function loadPluginCss() {
  if (window.grafanaBootData.user.lightTheme) {
    require("./css/assetmanager.light.css");
    require("./css/perfmanager.light.css");
  } else {
    require("./css/assetmanager.dark.css");
    require("./css/perfmanager.dark.css");
  }
}

loadPluginCss();

export { ConfigCtrl, Environments, AmazonServices, Kubernetes, StorageDetails };
