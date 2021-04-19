// import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { config } from '../../config';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { CustomTextbox } from '../../Components/CustomTextbox';
// import { Customselectbox } from '../../Components/Customselectbox';
// import AlertMessage from '../../Components/AlertMessage';
// import { RestService } from '../_service/RestService';
// import axios from 'axios';
// export class EditEnviornment extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             EnvironmentName: null,
//             EnvironmentDescription: null,
//             EnvironmentScopes: null,
//             EnvironmentAuthUrl: null,
//             EnvironmentTokenUrl: null,
//             EnvironmentApiUrl: null,
//             Enviornmentid: null,
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
//                     message: "full Name is required"
//                 };
//             }
//         }
//         return retData;
//     }
//     UpdateEnvironment = async (event: any) => {
//         const { EnvironmentName, EnvironmentDescription, EnvironmentScopes, EnvironmentAuthUrl, EnvironmentTokenUrl, EnvironmentApiUrl, Type, Enviornmentid } = this.state;
//         event.preventDefault();
//         this.setState({
//             isSubmitted: true
//         });
//         const errorData = this.validate(true);
//         if (!errorData.EnvironmentName.isValid) {
//             return;
//         }
//             console.log("Environment Name = " + EnvironmentName + " ,Environment description = " + EnvironmentDescription + " ,Environment Scopes = " + EnvironmentScopes + " ,Environment AuthUrl = " + EnvironmentAuthUrl + " ,Environment TokenUrl = " + EnvironmentTokenUrl + ", Environment ApiUrl = " + EnvironmentApiUrl+ ",Environment Type = " + Type+",Environment id = " + Enviornmentid);
//             var env = `&name=${EnvironmentName}&description=${EnvironmentDescription}&scopes=${EnvironmentScopes}&authUrl=${EnvironmentAuthUrl}&tokenUrl =${EnvironmentTokenUrl}&apiUrl=${EnvironmentApiUrl}&type=${Type}&id=${Enviornmentid}`;
//                 await RestService.put(`${config.UPDATE_ENVIRONMENT}?${env}`, {})
//                 .then(response => {
//                 let refreshEnvironment = this.props.refreshEnvironment;
//                 refreshEnvironment();
//                 if (response != null) {
//                     console.log("Done");
//                     this.setState({
//                         severity: config.SEVERITY_SUCCESS,
//                         message: config.Update_ENVIRONMENT_SUCCESS_MESSAGE,
//                         isAlertOpen: true,

//                     });
//                 } else {
//                     console.log("Not Complete");
//                     this.setState({
//                         severity: config.SEVERITY_ERROR,
//                         message: config.SERVER_ERROR_MESSAGE,
//                         isAlertOpen: true,
//                     });
//                 }
//                 setTimeout(() => {
//                     this.setState({
//                         isAlertOpen: false,
//                         modal: !this.state.modal,

//                     });

//                 },
//                     500
//                 );
//             });
    
//     }
//     handleClose = () => {
//         this.setState({
//             modal: false,
//         });
//     }


//     toggle = async (selectedEnviornment: any) => {
//         console.log("Selected data :::: ", selectedEnviornment.name, selectedEnviornment.description, selectedEnviornment.scopes, selectedEnviornment.authUrl, selectedEnviornment.tokenUrl, selectedEnviornment.apiUrl, selectedEnviornment.type, selectedEnviornment.id);
//         this.setState({
//             modal: !this.state.modal,
//             EnvironmentName: selectedEnviornment.name,
//             EnvironmentDescription: selectedEnviornment.description,
//             EnvironmentScopes: selectedEnviornment.scopes,
//             EnvironmentAuthUrl: selectedEnviornment.authUrl,
//             EnvironmentTokenUrl: selectedEnviornment.tokenUrl,
//             EnvironmentApiUrl: selectedEnviornment.apiUrl,
//             Type: selectedEnviornment.type,
//             Enviornmentid: selectedEnviornment.id
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
//         this.setState({
//            Type: e.target.value,
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
//                                 <h4 className="d-block"><i className="fa fa-building"></i> Edit Environment</h4>

//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="EnvironmentName">Name:</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="EnvironmentName" id="EnvironmentName" placeholder="Enter the Environment Name" name="EnvironmentName" value={state.EnvironmentName} onChange={this.handleStateChange} isValid={errorData.EnvironmentName.isValid} message={errorData.EnvironmentName.message} />
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
//                                     <label htmlFor="EnvironmentScopes">Scopes:</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="EnvironmentScopes" id="EnvironmentScopes" placeholder="Add notes about this Environment - make something about a recent deal, etc." name="EnvironmentScopes" value={state.EnvironmentScopes} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="AuthUrl">AuthUrl :</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="EnvironmentAuthUrl" id="EnvironmentAuthUrl" placeholder="eg: My company1.com, mycompany2.com" name="EnvironmentAuthUrl" value={state.EnvironmentAuthUrl} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="EnvironmentTokenUrl">TokenUrl :</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="EnvironmentTokenUrl" id="EnvironmentTokenUrl" placeholder="Any" name="EnvironmentTokenUrl" value={state.EnvironmentTokenUrl} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6 col-sm-12">
//                                 <div className="form-group">
//                                     <label htmlFor="EnvironmentApiUrl">ApiUrl :</label>
//                                     <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="EnvironmentApiUrl" id="EnvironmentApiUrl" placeholder="Any" name="EnvironmentApiUrl" value={state.EnvironmentApiUrl} onChange={this.handleStateChange} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-12 col-md-12 col-sm-12">
//                             <div className="form-group">
//                                 <label htmlFor="Type">Type :</label>
//                                 <select className="form-control" name={this.state.name} value={this.state.Type} onChange={this.onClickFilterType} >
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
//                                     <button className="save" onClick={this.UpdateEnvironment}>Update Environment</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ModalBody>
//             </Modal>
//         );
//     }
// }
