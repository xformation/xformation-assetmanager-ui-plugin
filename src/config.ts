const IP = "100.64.107.25";
const securitySrvUrl = `http://${IP}:8094`;
const assetSrvUrl = `http://${IP}:5057/api`;
const grafanaUrl = `http://${IP}:3000/api`;

export const config = {
  basePath: "/plugins/xformation-assetmanager-ui-plugin/page",
  octantURL: "http://localhost:7777/#/",
  SEVERITY_ERROR: "error",

  GET_ALL_ACCOUNT: `${assetSrvUrl}/searchAccounts`,
  GET_ACCOUNT_BY_ID: `${assetSrvUrl}/getAccount`,

  SEVERITY_SUCCESS: "success",
  ADD_Organization: `${assetSrvUrl}/addEnvironment`,
  SERVER_ERROR_MESSAGE: "SERVER_ERROR_MESSAGE",

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
    FileName: "",
    InputType: ""
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
  GET_VIEW_JSON: `${grafanaUrl}/dashboards/filterdashboards`,

  ADD_INPUT: `${assetSrvUrl}/addInput`,
  UPDATE_INPUT: `${assetSrvUrl}/updateInput`,
  SEARCH_INPUT: `${assetSrvUrl}/searchInput`,

  GET_AWS_REGIONS: `${assetSrvUrl}/getAwsRegions`
};
