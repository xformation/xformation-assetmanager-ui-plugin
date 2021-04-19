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
  INPUT_ACOOUNT: `${assetSrvUrl}/addInput`,
  SEVERITY_SUCCESS: "success",
  ADD_ENVIRONMENT_SUCCESS_MESSAGE: "ADD_ENVIRONMENT_SUCCESS_MESSAGE",
  Update_ENVIRONMENT_SUCCESS_MESSAGE: "Update ENVIRONMENT Succesfully",

  INPUT_ACCOUNT_SUCCESS_MESSAGE: "INPUT_ACCOUNT_SUCCESS_MESSAGE",
  SERVER_ERROR_MESSAGE: "SERVER_ERROR_MESSAGE",
  DETELE_ENVIRONMENT: `${assetSrvUrl}/deleteEnvironment/`,

  GET_ALL_NODES_IN_CLUSTER: assetSrvUrl + `/cluster`,
  PARENT_NAME: "xformation-assetmanager-ui-plugin",
  TCP_INPUT_STREAM: assetSrvUrl + `/system/inputs`,
  TCP_INPUT_ADDED_SUCESS: "TCP INPUT SAVED",
  TCP_INPUT_ADDED_ERROR: "TCP Input can't added",
  INPUT_URL: {
    KPI_INPUT: "http://127.0.0.1:7035/system/inputs",
    LOG_INPUT: "http://127.0.0.1:7037/system/inputs",
    CAMPLIANCE_INPUT: "http://127.0.0.1:7039/system/inputs",
    NATIVEDS_INPUT: "http://127.0.0.1:7055/system/inputs"
  },
  USERID: "admin",
  PASSWORD: "admin"
};
