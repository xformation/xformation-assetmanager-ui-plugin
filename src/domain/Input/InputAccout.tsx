import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomTextbox } from '../../Components/CustomTextbox';
import { Customselectbox } from '../../Components/Customselectbox';
import AlertMessage from '../../Components/AlertMessage';
import { RestService } from '../_service/RestService';
import axios from 'axios';
export class InputAccount extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputName: null,
            inputDescription: null,
            inputScopes: null,
            inputUrl: null,
            inputuserId: null,
            inputPassword: null,
            inputType: null,
            Accountid: null,
            isApiCalled: false,
            modal: false,
            folderArray: [],
            checkedFolder: [],
            isAlertOpen: false,
            message: null,
            severity: null,
            isSubmitted: false,
        };
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }
    validate = (isSubmitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        const retData = {
            inputName: validObj,
        };
        if (isSubmitted) {
            const { inputName } = this.state;
            if (!inputName) {
                retData.inputName = {
                    isValid: false,
                    message: "full Name is required"
                };
            }
        }
        return retData;
    }

    InputAccount = async (e: any) => {
        const {inputName, inputDescription, inputScopes, inputUrl, inputuserId, inputPassword, Accountid, inputType } = this.state;
        e.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        if (!errorData.inputName.isValid) {
            return;
        }
        console.log("Account id= " + Accountid + ",Input Name = " + inputName + ", Input Description  = " + inputDescription, +" Input Scopes  = " + inputScopes + ", Input Url = " + inputUrl + ", Input UserId  = " + inputuserId + ", Input Password = " + inputPassword + ", Input Type = " + inputType);
        var acounts = `&name=${inputName}&description=${inputDescription}&source=${inputScopes}&url=${inputUrl}&userId =${inputuserId}&password=${inputPassword}&type=${inputType}`;
        await RestService.add(`${config.INPUT_ACOOUNT}?${acounts}`, {})
            .then(response => {
                console.log("Input Acc response = ", response);
                if (response != null) {
                    this.setState({
                        severity: config.SEVERITY_SUCCESS,
                        message: config.INPUT_ACCOUNT_SUCCESS_MESSAGE,
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
                }, 2000);

            });
    }



    handleClose = () => {
        this.setState({
            modal: false,
        });
    }


    toggle = async (selectedAccount: any) => {
        console.log("Account id :::: ", selectedAccount);
        this.setState({
            modal: !this.state.modal,
            // Accountid: selectedAccount.id


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
    handleImageChange = (e: any) => {
        this.setState({
            companyPhotoUrl: URL.createObjectURL(e.target.files[0])
        })
        this.setState({
            companyLogo: e.target.files[0]
        })
    };
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
            inputType: e.target.value
        });
    }
    render() {
        const { isSubmitted } = this.state;
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
                                <h4 className="d-block"><i className="fa fa-building"></i> Input Account</h4>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputName">Name:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control"maxLength={255} htmlFor="inputName" id="inputName" placeholder="Enter input name" name="inputName" value={state.inputName} onChange={this.handleStateChange} isValid={errorData.inputName.isValid} message={errorData.inputName.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputDescription">Description:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxlength={5000} htmlFor="inputDescription" id="inputDescription" placeholder="Write something that describe this input" name="inputDescription" value={state.inputDescription} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputScopes">Source:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="inputScopes" id="inputScopes" placeholder="Enter your input scopes " name="inputScopes" value={state.inputScopes} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputUrl">Url :</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="inputUrl" id="inputUrl" placeholder="Enter your input url" name="inputUrl" value={state.inputUrl} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputuserId">UserId :</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="inputuserId " id="inputuserId " placeholder="Enter your input user Id " name="inputuserId " value={state.inputuserId} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <CustomTextbox type="password" containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="inputPassword" id="inputPassword" placeholder="Enter your input-account password" name="inputPassword" value={state.inputPassword} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="inputType">Type :</label>
                                <select className="form-control" name="inputType" value={state.inputType} onChange={this.onClickFilterType} >
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
                                <div className="d-block text-center p-t-20 contact-popup-buttons">
                                    <button className="cancel" onClick={this.handleClose}>Cancel</button>
                                    <button className="save" onClick={this.InputAccount}>Input Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}
