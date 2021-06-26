import * as React from 'react';

export class VerifyInputs extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            configureInputs: false,
        };
    }

    configureInputs = () => {
        this.setState({
            configureInputs: !this.state.configureInputs,
        });
    };

    render() {
        const { configureInputs } = this.state;
        return (
            <div className="verify-inputs-section">
                {!configureInputs && (
                    <div className="configure-inputs-section">
                        <p>Please click below to configure inputs for Performance Monitoring</p>
                        <button className="asset-blue-button" onClick={this.configureInputs}>Configure inputs</button>
                    </div>
                )}
                {configureInputs && (
                    <div className="configure-inputs-table">
                        <table className="table-thead" width="100%">
                            <tr>
                                <th>Input</th>
                                <th>Input Type</th>
                                <th>Available Dashboards</th>
                            </tr>
                        </table>
                        <table className="table-tbody first-table" width="100%">
                            <tr>
                                <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <a href="#">Input 1</a>
                                            </td>
                                            <td>
                                                <a href="#">Native input</a>
                                            </td>
                                            <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                                <table className="table-inner" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Brief Node Performance</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Node Storage Details</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Node Memory Details</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Node CPU Details</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table className="table-tbody first-table" width="100%">
                            <tr>
                                <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <a href="#">Input 2</a>
                                            </td>
                                            <td>
                                                <a href="#">Performance Manager</a>
                                            </td>
                                            <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                                <table className="table-inner" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Dashboard Name</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Dashboard Name</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table className="table-tbody first-table" width="100%">
                            <tr>
                                <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <a href="#">Input 3</a>
                                            </td>
                                            <td>
                                                <a href="#">New Input</a>
                                            </td>
                                            <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                                <table className="table-inner" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Dashboard Name</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>Dashboard Name</td>
                                                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>

                    </div>
                )}
            </div>
        );
    }
}