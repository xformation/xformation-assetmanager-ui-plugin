// import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { config } from '../../config';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { CustomTextbox } from '../../Components/CustomTextbox';
// import AlertMessage from '../../Components/AlertMessage';
// import {RestService} from '../_service/RestService';

// export class AddEnviornment extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             EnvironmentName: null,
//             EnvironmentDescription: null,
//             EnvironmentScopes: null,
//             EnvironmentAuthUrl: null,
//             EnvironmentTokenUrl: null,
//             EnvironmentApiUrl: null,
//             Type: null,
//             isApiCalled: false,
//             modal: false,
//             folderArray: [],
//             checkedFolder: [],
//             isAlertOpen: false,
//             message: null,
//             severity: null,
//             isSubmitted: false,
//         };
//         this.handleCloseAlert = this.handleCloseAlert.bind(this);
//     }

//     async componentDidMount() {
//         this.setState({
//             isApiCalled: true,
//         });

//     }
//     validate = (isSubmitted: any) => {
//         const validObj = {
//             isValid: true,
//             message: ""
//         };
//         const retData = {
//             EnvironmentName: validObj,
//         };
//         if (isSubmitted) {
//             const { EnvironmentName } = this.state;
//             if (!EnvironmentName) {
//                 retData.EnvironmentName = {
//                     isValid: false,
//                     message: "Name is required"
//                 };
//             }
//         }
//         return retData;
//     }

//     addEnvironment = async (event: any) => {
//         const { EnvironmentName, EnvironmentDescription, EnvironmentScopes, EnvironmentAuthUrl, EnvironmentTokenUrl, EnvironmentApiUrl, Type } = this.state;
//         event.preventDefault();
//         this.setState({
//             isSubmitted: true
//         });
//         const errorData = this.validate(true);
//         if (!errorData.EnvironmentName.isValid) {
//             return;
//         }
          
//             console.log("Environment Name = " + EnvironmentName, + " Environment description = " + EnvironmentDescription, + " Environment Scopes = " + EnvironmentScopes, + " Environment AuthUrl = " + EnvironmentAuthUrl, + " Environment TokenUrl = " + EnvironmentTokenUrl, + " Environment ApiUrl = " + EnvironmentApiUrl, "Environment Type = " + Type);
//             var qryw ="?name=" + EnvironmentName + "&type=" + Type + "&description=" + EnvironmentDescription + "&authUrl=" + EnvironmentAuthUrl + "&tokenUrl=" + EnvironmentTokenUrl + "&apiUrl=" + EnvironmentApiUrl + "&scopes=" + EnvironmentScopes;
//             await RestService.add(config.ADD_ENVIRONMENT+ qryw,{})
//             .then(response => {
//                     console.log('response: ', response);
//                     let refreshEnvironment = this.props.refreshEnvironment;
//                     refreshEnvironment();
//                     console.log('response1324: ', response);
//                     if (response != null) {
//                         console.log("Done");
//                         this.setState({
//                             severity: config.SEVERITY_SUCCESS,
//                             message: config.ADD_ENVIRONMENT_SUCCESS_MESSAGE,
//                             isAlertOpen: true,

//                         });
//                     } 
//                     else {
//                          console.log("Not Complete");
//                          this.setState({
//                              severity: config.SEVERITY_ERROR,
//                              message: config.SERVER_ERROR_MESSAGE,
//                              isAlertOpen: true,
//                          });
//                      }
//                      setTimeout(() => {
//                          this.setState({
//                              isAlertOpen: false,
//                              modal: !this.state.modal,

//                          });
//                         },500);
//                   });
//              }
//     handleClose = () => {
//         this.setState({
//             modal: false,
//         });
//     }
//     toggle = async (saveCatalog: any) => {
//         console.log("Selected data :::: ", saveCatalog);
//         this.setState({
//             modal: !this.state.modal,
//         });
//     }

//     setLink = (link: any) => {
//         this.setState({
//             link
//         });
//     };
//     HandleClose = () => {
//         this.setState({
//             modal: false,
//         });
//     }
//     handleCloseAlert = (e: any) => {
//         this.setState({
//             isAlertOpen: false
//         })
//     }
//     handleStateChange = (e: any) => {
//         const { name, value } = e.target;
//         this.setState({
//             [name]: value
//         });
//     };
//     onClickFilterType = (e: any) => {
//         const { type } = this.state;
//         const Type = e.target.value;
//         console.log("Selected  type :: ", Type);
//         this.setState({
//             Type: Type,
//         });
//     }
//     render() {
//         const { isSubmitted } = this.state;
//         const state = this.state;
//         const errorData = this.validate(isSubmitted);
//         return (
//             <Modal isOpen={state.modal} toggle={this.toggle} className="modal-container servicdesk-modal-container">
//                 <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
//                 <button className="close-btn" onClick={this.handleClose}>X</button>
//                 <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
//                     <div className="d-block width-100 contact-popup-container">
//                         <div className="d-block p-b-20 heading">
//                             <div className="d-block width-100">
//                                 <h4 className="d-block"><i className="fa fa-building"></i> Add Environment</h4>

//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="EnvironmentName">Name:</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="EnvironmentName" id="EnvironmentName" placeholder="Enter  Environment Name" name="EnvironmentName" value={state.EnvironmentName} onChange={this.handleStateChange} isValid={errorData.EnvironmentName.isValid} message={errorData.EnvironmentName.message} />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="EnvironmentDescription">Description:</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="EnvironmentDescription" id="EnvironmentDescription" placeholder="Write something that describe this Environment" name="EnvironmentDescription" value={state.EnvironmentDescription} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="Scopes">Scopes:</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="Scopes" id="EnvironmentScopes" placeholder="Enter Environment Scopes" name="EnvironmentScopes" value={state.EnvironmentScopes} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="AuthUrl">AuthUrl :</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="EnvironmentAuthUrl" id="EnvironmentAuthUrl" placeholder="Enter Environment AuthUrl" name="EnvironmentAuthUrl" value={state.EnvironmentAuthUrl} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="TokenUrl">TokenUrl :</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="EnvironmentTokenUrl" id="EnvironmentTokenUrl" placeholder="Any" name="EnvironmentTokenUrl" value={state.EnvironmentTokenUrl} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="EnvironmentApiUrl">ApiUrl :</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="EnvironmentApiUrl" id="EnvironmentApiUrl" placeholder="Any" name="EnvironmentApiUrl" value={state.EnvironmentApiUrl} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-12 col-md-12 col-sm-12">
//                             <div className="form-group">
//                                 <label htmlFor="Type">Type :</label>
//                                 <select className="form-control" name="Type" value={state.Type} onChange={this.onClickFilterType} >
//                                     <option value="ALL">ALL</option>
//                                     <option value="AWS">AWS</option>
//                                     <option value="AZURE">AZURE</option>
//                                     <option value="GCP">GCP</option>
//                                     <option value="Synectiks">Synectiks</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="row">
//                             <div className="col-lg-12 col-md-12 col-sm-12">
//                                 <div className="d-block text-center p-t-20 contact-popup-buttons">
//                                     <button className="cancel" onClick={this.handleClose}>Cancel</button>
//                                     <button className="save" onClick={this.addEnvironment}>Add Environment</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ModalBody>
//             </Modal>
//         );
//     }
// }
