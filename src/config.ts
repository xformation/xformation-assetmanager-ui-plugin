const IP = "localhost";
const securitySrvUrl = `http://${IP}:8094`;
const assetSrvUrl = `http://${IP}:5057/api`;
export const config = {
  basePath: "/plugins/xformation-assetmanager-ui-plugin/page",
  octantURL: "http://100.64.108.25:7777/#/",
  SEVERITY_ERROR: "error",
  ADD_ENVIRONMENT: `${assetSrvUrl}/addEnvironment`,
  GET_ALL_ENVIRONMENT: `${assetSrvUrl}/getAllEnvironment`,
  SEVERITY_SUCCESS: " SEVERITY_SUCCESS",
  ADD_ENVIRONMENT_SUCCESS_MESSAGE: "ADD_ENVIRONMENT_SUCCESS_MESSAGE",
  SERVER_ERROR_MESSAGE: "SERVER_ERROR_MESSAGE"
};
