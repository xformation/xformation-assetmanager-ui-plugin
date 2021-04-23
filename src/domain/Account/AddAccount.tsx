import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap';
import { CustomTextbox } from '../../Components/CustomTextbox';
import { RestService } from '../_service/RestService';
import AlertMessage from '../../Components/AlertMessage';
export class AddAccount extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            accountName: null,
            accountDescription: null,
            enviornmentId: '1',
            password: null,
            accountEmail: null,
            accountclientId: null,
            accountclientSecret: null,
            acoountuserType: null,
            accountapiUrl:null,
            accounttokenUrl:null,
            authUrl:null,
            accountScopes:null,
            Type:null,
            Organization:null,
            isApiCalled: false,
            status: null,
            modal: false,
            folderArray: [],
            checkedFolder: [],
            isAlertOpen: false,
            message: null,
            severity: null,
            isSubmitted: false,
        };
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.addEnvAccount = this.addEnvAccount.bind(this);
    }
    async componentDidMount() {
        this.setState({
            isApiCalled: true,
        });
    }
    validate = (isSubmitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        const retData = {
            accountName: validObj,
        };
        if (isSubmitted) {
            const { accountName } = this.state;
            if (!accountName) {
                retData.accountName = {
                    isValid: false,
                    message: "Name is required"
                };
            }
        }
        return retData;
    }
    refreshEnvironment(){
        this.setState({
            accountName: null,
            accountDescription: null,
            enviornmentId: '1',
            password: null,
            accountEmail: null,
            accountclientId: null,
            accountclientSecret: null,
            acoountuserType: null,
            accountapiUrl:null,
            accounttokenUrl:null,
            authUrl:null,
            accountScopes:null,
            Type:null,
         
        });
    }

    addEnvAccount = async (e: any) => {
        const { accountName, accountDescription, accountEmail, password, accountclientSecret,
       
            enviornmentId, acoountuserType, accountclientId, status,accountapiUrl,accounttokenUrl,authUrl,accountScopes,Type,Organization} = this.state;
        e.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        if (!errorData.accountName.isValid) {
            return;
        } 
        else{
            this.setState({
                isSubmitted: false
            });
        } 
        var qry = `environmentId=${enviornmentId}&name=${accountName}&description=${accountDescription}&email=${accountEmail}&password=${password}&clientSecret=${accountclientSecret}&userType=${acoountuserType}&status=${status}&clientId=${accountclientId}&apiUrl=${accountapiUrl}&tokenUrl=${accounttokenUrl}&authUrl=${authUrl}&scopes=${accountScopes}&type=${Type}&name=${Organization}`;
        console.log("Add  = ", qry);

        await fetch(config.ADD_ENVIRONMENT + "?environmentId=" + enviornmentId + "&name=" + accountName + "&description=" + accountDescription + "&email="+ accountEmail+ "&password="+ password + "&clientSecret="+ accountclientSecret + "&userType="+ acoountuserType + "&status="+ status + "&clientId="+ accountclientId +"&apiUrl="+ accountapiUrl + "&tokenUrl="+ accounttokenUrl + "&authUrl="+ authUrl + "&scopes=" +accountScopes + "&type="+ Type+"&oganizationName="+Organization,{
            method: 'post',
        }).then(response => response.json())
            .then(response => {
                console.log("Add ac response = ", response);
                // let refreshEnvironment= this.props.refreshEnvironment;
                
                if (response.length > 0) {
                    this.setState({
                        severity: config.SEVERITY_SUCCESS,
                        message: config. ADD_ENVIRONMENT_SUCCESS_MESSAGE,
                        isAlertOpen: true,
                    });
                } else {
                    this.setState({
                        severity: config.SEVERITY_ERROR,
                        message: config.SERVER_ERROR_MESSAGE,
                        isAlertOpen: true,
                    });
                }
                setTimeout(() => {
                    this.setState({
                        isAlertOpen: false,
                        modal: !this.state.modal,
                    });
                  
                },1000);
            });
            this.refreshEnvironment();
        }
   
        
    handleClose = () => {
        this.setState({
             modal: false,
            
        });
        this.refreshEnvironment();

    }

    toggle = async (selectedEnviornment: any) => {
        this.setState({
            modal: !this.state.modal,
            EnviornmentName: selectedEnviornment,
        });
    }

    setLink = (link: any) => {
        this.setState({
            link
        });
    };

    HandleClose = () => {
        this.setState({
            modal: false,
        });
    }

    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false
        })
    }
    
    handleStateChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    onClickFilterType = (e: any) => {
              this.setState({
                 Type: e.target.value,
              });
            }

    render() {
        const { isSubmitted, } = this.state;
        const state = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <Modal isOpen={state.modal} toggle={this.toggle} className="modal-container servicdesk-modal-container">
             <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
                <button className="close-btn" onClick={this.handleClose}>X</button>
                <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 contact-popup-container">
                        <div className="d-block p-b-20 heading">
                            <div className="d-block width-100">
                                <h4 className="d-block"><i className="fa fa-building"></i>Add Account</h4>
                                <label >Environment: {this.state.EnviornmentName}</label>

                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                             <div className="form-group">
                                 <label htmlFor="Type">Type :</label>
                                 <select className="form-control" name={this.state.name} value={this.state.Type} onChange={this.onClickFilterType}>
                                     <option value="ALL">ALL</option>
                                     <option value="AWS">AWS</option>
                                     <option value="AZURE">AZURE</option>
                                     <option value="GCP">GCP</option>
                                     <option value="Synectiks">Synectiks</option>
                                 </select>
                             </div>
                         </div>
                         <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="Organization">Organization Name:</label>
                                    <CustomTextbox containerClass="form-group-inner" maxLength={255} inputClass="form-control" htmlFor="Organization" id="Organization" placeholder="Organization Name" name="Organization" value={state.Organization} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountName">Account Name:</label>
                                    <CustomTextbox containerClass="form-group-inner" maxLength={255} inputClass="form-control" htmlFor="accountName" id="accountName" placeholder="Enter Account Name" name="accountName" value={state.accountName} onChange={this.handleStateChange} isValid={errorData.accountName.isValid} message={errorData.accountName.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountDescription">Description:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={5000} htmlFor="accountDescription" id="accountDescription" placeholder="Write something that describe this account" name="accountDescription" value={state.accountDescription} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountEmail">Email:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="accountEmail" id="accountEmail" placeholder="Enter account's email id" name="accountEmail" value={state.accountEmail} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <CustomTextbox type="password" containerClass="form-group-inner" maxLength={255} inputClass="form-control" htmlFor="password" id="password" placeholder="Enter account's password" name="password" value={state.password} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountclientId"> ClientId:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={2000} id="accountclientId" placeholder="accountclientId" name="accountclientId" value={state.accountclientId} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountclientSecret">ClientSecret</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={2000} htmlFor="accountclientSecret" id="accountclientSecret" placeholder="null" name="accountclientSecret" value={state.accountclientSecret} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="acoountuserType"> UserType:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="acoountuserType" id="acoountuserType" placeholder="any" name="acoountuserType" value={state.acoountuserType} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="status">Status :</label>
                                <select className="form-control" name="status" value={state.status} onChange={this.handleStateChange} >
                                    <option value="Enable">Enable</option>
                                    <option value="Disable">Disable</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountScopes">Scopes</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={2000} htmlFor="accountScopes" id="accountScopes" placeholder="null" name="accountScopes" value={state.accountScopes} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountapiUrl">ApiUrl</label>
                                    <CustomTextbox containerClass="form-group-inner" maxLength={255} inputClass="form-control" htmlFor="accountapiUrl" id="accountapiUrl" placeholder="" name="accountapiUrl" value={state.accountapiUrl} onChange={this.handleStateChange}  />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="authUrl"> AuthUrl:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={2000} htmlFor="authUrl" id="authUrl" placeholder="account authUrl" name="authUrl" value={state.authUrl} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accounttokenUrl">TokenUrl</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={2000} htmlFor="accounttokenUrl" id="accounttokenUrl" placeholder="null" name="accounttokenUrl" value={state.accounttokenUrl} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-center p-t-20 contact-popup-buttons">
                                    <button className="cancel" onClick={this.handleClose}>Cancel</button>
                                    <button className="save" onClick={this.addEnvAccount}>Add Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}