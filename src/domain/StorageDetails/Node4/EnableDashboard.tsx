import * as React from 'react';

export class EnableDashboard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <div className="verify-inputs-section">
                <div className="configure-inputs-table">
                    <table className="table-thead" width="100%">
                        <tr>
                            <th>Input</th>
                            <th>Input Type</th>
                            <th>
                                Available Dashboards
                                <div className="float-right">
                                    <a href="#"><i className="fa fa-plus"></i></a>
                                    <a href="#"><i className="fa fa-times"></i></a>
                                </div>
                            </th>
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
            </div>
        );
    }
}