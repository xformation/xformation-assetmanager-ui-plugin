import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap';
import { CustomTextbox } from '../../Components/CustomTextbox';
import { Customselectbox } from '../../Components/Customselectbox';
import AlertMessage from '../../Components/AlertMessage';
import {RestService} from '../_service/RestService';

export class AddAccount extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            AccountName: null,
            AccountDescription: null,
            Enviornmentid: null,
            Password: null,
            AccountEmail: null,
            User_Type: null,
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
            AccountName: validObj,
        };
        if (isSubmitted) {
            const { AccountName } = this.state;
            if (!AccountName) {
                retData.AccountName = {
                    isValid: false,
                    message: "Name is required"
                };
            }
        }
        return retData;
    }

    addEnvAccount = async (e: any) => {
        const { AccountName, AccountDescription, AccountEmail, Password, Enviornmentid } = this.state;
        e.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        if (!errorData.AccountName.isValid) {
            return;
        }
        console.log("Environment Name = " + AccountName, + " Environment description = " + AccountDescription, + " Email = " + AccountEmail, + " Password = " + Password + "Environment id = " + Enviornmentid,);
        var qry = "?environmentId=" + Enviornmentid + "&name=" +AccountName + "&description=" +AccountDescription + "&email ="+AccountEmail + " &password =" +Password;
        
        await RestService.add(config.ADD_ACOOUNT + qry, {})
        .then(response => {
            console.log("Add ac response = ", response );
            if(response.length > 0){
                this.setState({
                    severity: config.SEVERITY_SUCCESS,
                    message: config.ADD_ACCOUNT_SUCCESS_MESSAGE,
                    isAlertOpen: true,
                }); 
            }else{
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
            },2000);
        });
    }
  
    handleClose = () => {
        this.setState({
            modal: false,
        });
    }


    toggle = async (selectedEnviornment: any) => {
        this.setState({
            modal: !this.state.modal,
            EnviornmentName: selectedEnviornment.name,
            Enviornmentid: selectedEnviornment.id
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
        const Type = e.target.value;
        this.setState({
            Type: Type,
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
                                <label >Environment Name :{this.state.EnviornmentName}</label>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="AccountName">Name:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="AccountName" id="AccountName" placeholder="Enter Environment Name" name="AccountName" value={state.AccountName} onChange={this.handleStateChange} isValid={errorData.AccountName.isValid} message={errorData.AccountName.message}/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="AccountDescription">Description:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="AccountDescription" id="AccountDescription" placeholder="Write something that describe this Environment" name="AccountDescription" value={state.AccountDescription} onChange={this.handleStateChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="AccountEmail">Email:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="AccountEmail" id="AccountEmail" placeholder="Enter Your Email" name="AccountEmail" value={state.AccountEmail} onChange={this.handleStateChange} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <CustomTextbox type="password" containerClass="form-group-inner" inputClass="form-control" htmlFor="Password" id="Password" placeholder="Enter Your Password" name="Password" value={state.Password} onChange={this.handleStateChange} />
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
