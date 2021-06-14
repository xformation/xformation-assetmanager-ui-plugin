import * as React from 'react';

export class VerifyAndSave extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="verify-inputs-section">
                <div className="configure-inputs-table verify-and-save-table">
                    <div className="following-node">Following Dashboard's will be enabled for Performance Monitoring of the node</div>
                    <table className="table-thead" width="100%">
                        <tr>
                            <th>Input</th>
                            <th>Input Type</th>
                            <th>Dashboards</th>
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
                                                    </tr>
                                                    <tr>
                                                        <td><input type="checkbox" /></td>
                                                        <td>Node Storage Details</td>
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
            </div>
        );
    }
}