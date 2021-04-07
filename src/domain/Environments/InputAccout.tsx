import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomTextbox } from '../../Components/CustomTextbox';
import { Customselectbox } from '../../Components/Customselectbox';
import AlertMessage from '../../Components/AlertMessage';
import axios from 'axios';
export class InputAccount extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            EnvironmentName: null,
            EnvironmentDescription: null,
            EnvironmentScopes: null,
            EnvironmentAuthUrl: null,
            EnvironmentTokenUrl: null,
            EnvironmentApiUrl: null,
            Enviornmentid: null,
            Type: null,
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


    InputEnvironment = async (event: any) => {
    }
    validate = (isSubmitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        const retData = {
            InputName: validObj,
        };
        if (isSubmitted) {
            const { InputName } = this.state;
            if (!InputName) {
                retData.InputName = {
                    isValid: false,
                    message: "full Name is required"
                };
            }
        }
        return retData;
    }
    handleClose = () => {
        this.setState({
            modal: false,
        });
    }


    toggle = async (saveCatalog: any) => {
        console.log("Selected data :::: ", saveCatalog);
        this.setState({
            modal: !this.state.modal,
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
            Type: e.target.value
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
                                    <label htmlFor="InputName">Name:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="InputName" id="InputName" placeholder="Enter Input Name" name="InputName" value={state.InputName} onChange={this.handleStateChange} isValid={errorData.InputName.isValid} message={errorData.InputName.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="InputDescription">Description:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="InputDescription" id="InputDescription" placeholder="Write something that describe this Input" name="InputDescription" value={state.InputDescription} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="InputScopes">Source:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="InputScopes" id="InputScopes" placeholder="Add notes about this Input - make something about a recent deal, etc." name="InputScopes" value={state.InputScopes} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="AuthUrl">Url :</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="InputAuthUrl" id="InputAuthUrl" placeholder="eg: My company1.com, mycompany2.com" name="InputAuthUrl" value={state.InputAuthUrl} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="InputUserId">UserId :</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="InputUserId " id="InputUserId " placeholder="Enter Your InputUserId " name="InputUserId " value={state.InputUserId } onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="InputPassword">Password</label>
                                    <CustomTextbox type="password" containerClass="form-group-inner" inputClass="form-control" htmlFor="InputPassword" id="InputPassword" placeholder="Enter Your InputPassword" name="InputPassword" value={state.InputPassword} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="Type">Type :</label>
                                <select className="form-control" name="Type" value={state.Type} onChange={this.onClickFilterType} >
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
                                    <button className="save" onClick={this.InputEnvironment}>Input Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}
