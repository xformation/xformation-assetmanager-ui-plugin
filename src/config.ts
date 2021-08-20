const IP = "100.64.107.25";
const securitySrvUrl = `http://${IP}:8094`;
const assetSrvUrl = `http://${IP}:5057/api`;
const grafanaUrl = `http://${IP}:3000/api`;

export const config = {
  basePath: "/plugins/xformation-assetmanager-ui-plugin/page",
  octantURL: "http://localhost:7777/#/",
  SEVERITY_ERROR: "error",
  // ADD_ENVIRONMENT: `${assetSrvUrl}/addEnvironment`,
  // UPDATE_ENVIRONMENT: `${assetSrvUrl}/updateEnvironment`,
  // GET_ALL_ENVIRONMENT: `${assetSrvUrl}/getAllEnvironment`,
  GET_ALL_ACCOUNT: `${assetSrvUrl}/searchAccounts`,
  GET_ACCOUNT_BY_ID: `${assetSrvUrl}/getAccount`,
  // GET_ENVIRONMENT_BY_ID: `${assetSrvUrl}/getEnvironment`,

  SEVERITY_SUCCESS: "success",
  // ADD_ENVIRONMENT_SUCCESS_MESSAGE: "ADD_ENVIRONMENT_SUCCESS_MESSAGE",
  // Update_ENVIRONMENT_SUCCESS_MESSAGE: "Update ENVIRONMENT Succesfully",
  ADD_Organization: `${assetSrvUrl}/addEnvironment`,
  // INPUT_ACCOUNT_SUCCESS_MESSAGE: "INPUT_ACCOUNT_SUCCESS_MESSAGE",
  SERVER_ERROR_MESSAGE: "SERVER_ERROR_MESSAGE",
  // DETELE_ENVIRONMENT: `${assetSrvUrl}/deleteEnvironment/`,

  // GET_ALL_NODES_IN_CLUSTER: assetSrvUrl + `/cluster`,
  // PARENT_NAME: "xformation-assetmanager-ui-plugin",
  // TCP_INPUT_STREAM: assetSrvUrl + `/system/inputs`,
  // TCP_INPUT_ADDED_SUCESS: "TCP INPUT SAVED",
  // TCP_INPUT_ADDED_ERROR: "TCP Input can't added",
  // INPUT_URL: {
  //   KPI_INPUT: "http://localhost:7035/system/inputs",
  //   LOG_INPUT: "http://localhost:7037/system/inputs",
  //   CAMPLIANCE_INPUT: "http://localhost:7039/system/inputs",
  //   NATIVEDS_INPUT: "http://localhost:7055/system/inputs"
  // },
  DASHBOARD_JSON: {
    Uid: "",
    Uuid: "",
    Slug: "",
    Title: "",
    OrgId: 1,
    "GnetId ": 0,
    Version: "1",
    PluginId: "",
    UpdatedBy: "1",
    CreatedBy: "1",
    FolderId: 0,
    IsFolder: false,
    HasAcl: false,
    Data: "",
    SourceJsonRef: "",
    InputSourceId: "",
    AccountId: "",
    TenantId: "",
    IsCloud: true,
    CloudName: "",
    ElementType: "",
    FileName: ""
  },
  RAW: {
    Dashboard: {},
    UserId: 1,
    Overwrite: true,
    Message: "",
    OrgId: 1,
    PluginId: "",
    FolderId: 0,
    IsFolder: false
  },

  USERID: "admin",
  PASSWORD: "password",
  // GET_ALL_ORGANIZATIONS: `${assetSrvUrl}/getAllOrganizations`,
  ADD_ORGANIZATION_UNIT: `${assetSrvUrl}/addOrganizationUnit`,
  ADD_ACCOUNT: `${assetSrvUrl}/addAccount`,

  GET_USER_ORGANIZATION: `${assetSrvUrl}/getAllOrgUnits`,
  GET_DISCOVERED_ASSETS: `${assetSrvUrl}/getDiscoveredAsset`,
  SEARCH_APPLICATION_ASSETS: `${assetSrvUrl}/searchApplicationAsset`,
  GET_APPLICATION_ASSETS_BY_INPUT_TYPE: `${assetSrvUrl}/getApplicationAssetsGropuByInputType`,
  BULK_ADD_APPLICATION_ASSETS: `${assetSrvUrl}/bulkAddApplicationAssets`,
  BULK_UPDATE_APPLICATION_ASSETS: `${assetSrvUrl}/bulkUpdateApplicationAssets`,
  ADD_INPUT_CONFIG: `${assetSrvUrl}/addInputConfig`,
  SEARCH_INPUT_CONFIG: `${assetSrvUrl}/searchInputConfig`,

  ADD_DASHBOARDS_TO_GRAFANA: `${grafanaUrl}/dashboards/importAssets`,
  ADD_DATASOURCE_IN_GRAFANA: `${grafanaUrl}/datasources`,
  // UPDATE_DATASOURCE_IN_GRAFANA: `${grafanaUrl}/datasources/updateDataSource`,

  ADD_INPUT: `${assetSrvUrl}/addInput`,
  UPDATE_INPUT: `${assetSrvUrl}/updateInput`,
  SEARCH_INPUT: `${assetSrvUrl}/searchInput`,

  GET_AWS_REGIONS: `${assetSrvUrl}/getAwsRegions`
};
