const IP = "localhost";
const securitySrvUrl = `http://${IP}:8094`;
const assetSrvUrl = `http://${IP}:5057/api`;
export const config = {
  basePath: "/plugins/xformation-assetmanager-ui-plugin/page",
  octantURL: "http://100.64.108.25:7777/#/",
  SEVERITY_ERROR: "error",
  ADD_ENVIRONMENT: `${assetSrvUrl}/addEnvironment`,
  UPDATE_ENVIRONMENT: `${assetSrvUrl}/updateEnvironment`,
  GET_ALL_ENVIRONMENT: `${assetSrvUrl}/getAllEnvironment`,
  ADD_ACOOUNT: `${assetSrvUrl}/addAccount`,
  INPUT_ACOOUNT: `${assetSrvUrl}/addInput`,
  SEVERITY_SUCCESS: "success",
  ADD_ENVIRONMENT_SUCCESS_MESSAGE: "ADD_ENVIRONMENT_SUCCESS_MESSAGE",
  Update_ENVIRONMENT_SUCCESS_MESSAGE: "Update ENVIRONMENT Succesfully",
  ADD_ACCOUNT_SUCCESS_MESSAGE: "ADD_ACCOUNT_SUCCESS_MESSAGE",
  INPUT_ACCOUNT_SUCCESS_MESSAGE: "INPUT_ACCOUNT_SUCCESS_MESSAGE",
  SERVER_ERROR_MESSAGE: "SERVER_ERROR_MESSAGE",
  DETELE_ENVIRONMENT: `${assetSrvUrl}/deleteEnvironment/`,

  PARENT_NAME: "xformation-assetmanager-ui-plugin"
};
