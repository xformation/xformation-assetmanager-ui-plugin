import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
export class CreateNewOU extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            openouCollapseStatus: false
        };
    }

    toggle = async (selectedOrganizational: any) => {
        this.setState({
            modal: !this.state.modal,
            OrganizationalName: selectedOrganizational.name,
            OrganizationalId: selectedOrganizational.id
        });
    }

    handleClose = () => {
        this.setState({
            modal: false,
        });
    }

    opensubouCollapse = () => {
        let collapse = !this.state.openouCollapseStatus;
        this.setState({
            openouCollapseStatus: collapse,
        });
    }

    render() {
        const { modal, openouCollapseStatus } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container servicdesk-modal-container">
                <ModalHeader toggle={this.toggle}>Create New Organizational Unit </ModalHeader>
                <ModalBody style={{ height: 'calc(62vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" id="name" name="name" value="" className="input-group-text" placeholder="Name of OU" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="Select">Select the Account or OU below</label>
                                <div className="collapse-contents">
                                    <ul>
                                        <li>
                                            <div className="text">
                                                {openouCollapseStatus == false && <div onClick={this.opensubouCollapse} className="caret-right"></div>}
                                                {openouCollapseStatus == true && <div onClick={this.opensubouCollapse} className="caret-down"></div>}
                                    Synectiks
                                </div>
                                            {openouCollapseStatus == true && <ul className="show">
                                                <li>Finance</li>
                                                <li>IT Networking</li>
                                                <li>Monitoring</li>
                                            </ul>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="d-block text-right p-t-20 contact-popup-buttons">
                                <button className="blue-button m-b-0" onClick={this.handleClose}>Cancel</button>
                                <button className="blue-button m-r-0 m-b-0">Create</button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}