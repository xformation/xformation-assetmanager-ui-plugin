import { Environments, Service } from "./ui";
import { ConfigCtrl } from "./ConfigCtrl";

// import { loadPluginCss } from '@grafana/runtime';
// Patch since @grafana/runtime is giving error on build
declare const window: any;
export function loadPluginCss() {
  if (window.grafanaBootData.user.lightTheme) {
    require("./css/assetmanager.light.css");
  } else {
    require("./css/assetmanager.dark.css");
  }
}

loadPluginCss();

export { ConfigCtrl, Environments, Service };
