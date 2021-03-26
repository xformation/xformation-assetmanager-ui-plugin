import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { config } from '../../config';


export class AddAccount extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            EnvironmentName: null,
            EnvironmentDescription: null,
            isApiCalled: false,
            modal: false,
            folderArray: [],
            checkedFolder: [],
            isAlertOpen: false,
            message: null,
            severity: null,
        };

        this.onChange = this.onChange.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    async componentWillMount() {
        this.setState({
            isApiCalled: true
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    closeModel = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    onChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    addEnvironment = async () => {
        const { EnvironmentName,  EnvironmentDescription } = this.state;
        if (!EnvironmentName) {
            this.setState({
                severity: config.SEVERITY_ERROR,
                message: "Environment  name is mandatory. Please provide some value for catalog name",
                isAlertOpen: true,
            });
            return;
        }
       
        console.log("Environment Name = " + EnvironmentName+ ", Environment description = " + EnvironmentDescription);

        const cd = new FormData();
        cd.append("name", EnvironmentName);
        cd.append("description", EnvironmentDescription);
        console.log("Data is adding :: ", cd);
        await fetch(config.ADD_ENVIRONMENT + "?name=" + EnvironmentName +  "&description=" + EnvironmentDescription, {
            method: 'post',
        }).then(response => response.json())
            .then(response => {
                console.log('response: ', response);
                let refreshCatalog=this.props.refreshCatalog;
                refreshCatalog();
                if (response != null) {
                    console.log("ok");
                    this.setState({
                        severity: config.SEVERITY_SUCCESS,
                        message: config.ADD_ENVIRONMENT_SUCCESS_MESSAGE,
                        isAlertOpen: true,

                    });
                } else {
                    console.log("Not ok");
                    this.setState({
                        severity: config.SEVERITY_ERROR,
                        message: config.SERVER_ERROR_MESSAGE,
                        isAlertOpen: true,
                    });
                }
                setTimeout(()=>{
                    this.setState({
                        isAlertOpen:false,
                        modal: !this.state.modal,
                    });
                },
                    3000
                  );
            });
            
    }
    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false
        })
    }
    onChangeSelectBox = (e: any) => {
        this.setState({
            catalogType: e.target.value
        });
    }
    render() {
        const state = this.state;
        return (
            <Modal isOpen={state.modal} toggle={this.closeModel} className="modal-container perfmanager-modal-container">
             
                {/* <ModalHeader toggle={this.closeModel}>{this.state.catalogName} </ModalHeader> */}
                <ModalBody style={{ height: 'calc(48vh - 0px)', overflowY: 'auto', overflowX: "hidden" }}>
                <div className="asset-heading">
                         Amazon Web Services
                                </div>
                    <div className="catalog-form-group">
                        <div className="form-group">
                            <label htmlFor="EnvironmentName">Name:</label>
                            <input type="text" placeholder="" name="EnvironmentName" id="EnvironmentName" value={state.EnvironmentName} onChange={this.onChange} maxLength={255} className="input-group-text" />
                        </div>
                      
                        <div className="form-group">
                            <label htmlFor="EnvironmentDescription"> Description:</label>
                            <textarea name="EnvironmentDescription" className="input-group-text" id="EnvironmentDescription" onChange={this.onChange} value={state.EnvironmentDescription}></textarea>
                        </div>
                        <div className="form-group p-b-0 text-right">
                            <a className="gray-button" onClick={this.closeModel}>Cancel</a>
                            <a className="blue-button m-r-0" onClick={this.addEnvironment}>Add Environment  </a>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}