import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomTextbox } from '../../Components/CustomTextbox';
import AlertMessage from '../../Components/AlertMessage';
import {RestService} from '../_service/RestService';

export class  OrganisationUnit extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            EnvironmentName: null,
            EnvironmentDescription: null,
            EnvironmentScopes: null,
            EnvironmentAuthUrl: null,
            EnvironmentTokenUrl: null,
            EnvironmentApiUrl: null,
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
            EnvironmentName: validObj,
        };
        if (isSubmitted) {
            const { EnvironmentName } = this.state;
            if (!EnvironmentName) {
                retData.EnvironmentName = {
                    isValid: false,
                    message: "Name is required"
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
    toggle = async () => {
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
        const { type } = this.state;
        const Type = e.target.value;
        console.log("Selected  type :: ", Type);
        this.setState({
            Type: Type,
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
                <ModalBody style={{ height: 'calc(45vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 contact-popup-container">
                        <div className="d-block p-b-20 heading">
                            <div className="d-block width-100">
                                <h4 className="d-block"><i className="fa fa-building"></i> Organisation Unit</h4>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="Organisation"> Organisation Name:</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" maxLength={255} htmlFor="EnvironmentName" id="EnvironmentName" placeholder="Enter  Organisation Unit Name" name="EnvironmentName" value={state.EnvironmentName} onChange={this.handleStateChange} isValid={errorData.EnvironmentName.isValid} message={errorData.EnvironmentName.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-center p-t-20 contact-popup-buttons">
                                    <button className="cancel" onClick={this.handleClose}>Cancel</button>
                                    <button className="save" >Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}
