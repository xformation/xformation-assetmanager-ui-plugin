import { config } from "../../config";
export const CommonService = {
  getBasicAuthEncodedString,
  requestOptionsForGetRequest,
  requestOptionsForPostRequest
};
function getBasicAuthEncodedString(userId: any, password: any) {
  var credentials = userId + ":" + password;
  var encodedString = btoa(credentials);
  var basicAuth = "Basic " + encodedString;
  return basicAuth;
}
function requestOptionsForGetRequest() {
  var myHeaders = new Headers();
  myHeaders.append("X-Requested-By", "XMLHttpRequest");
  myHeaders.append(
    "Authorization",
    getBasicAuthEncodedString(config.USERID, config.PASSWORD)
  );
  myHeaders.append("Content-Type", "application/json");
  var requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  return requestOptions;
}
function requestOptionsForPostRequest(bodyData: any) {
  var myHeaders = new Headers();
  myHeaders.append("X-Requested-By", "XMLHttpRequest");
  myHeaders.append(
    "Authorization",
    getBasicAuthEncodedString(config.USERID, config.PASSWORD)
  );
  myHeaders.append("Content-Type", "application/json");
  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: bodyData,
    redirect: "follow"
  };
  return requestOptions;
}
