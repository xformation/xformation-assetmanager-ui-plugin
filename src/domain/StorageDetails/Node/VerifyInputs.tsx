import * as React from 'react';
import { RestService } from '../../_service/RestService';
import { config } from '../../../config';


export class VerifyInputs extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            configureInputs: false,
            tableData: [],
            selectedData: [],
        };
    }

    configureInputs = () => {
        this.setState({
            configureInputs: !this.state.configureInputs,
        });
    };

    getParameterByName = (name: any, url: any) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }


    componentDidMount() {
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);
        if (tenantId) {
            try {
                RestService.getData(`${config.GET_APPLICATION_ASSETS_BY_INPUT_TYPE}?tenantId=${tenantId}&accountId=${accountId}`, null, null).then(
                    (response: any) => {
                        // console.log("Application assets: ",response);
                        this.setState({
                            tableData: response,
                        });
                    }, (error: any) => {
                        console.log("Error: ", error);
                    });
            } catch (err) {
                console.log("Error: ", err);
            }
        } else {
            alert("Tenant id is not present");
        }
    }

    handleChange(e: any, obj: any, index: any) {
        let isChecked = e.target.checked;
        const {selectedData} = this.state;
        if(isChecked){
            selectedData.push(obj);
            this.setState({selectedData: selectedData});
        }else{
            const keys = Object.keys(selectedData);
            this.removeObject(obj, selectedData);
        }
    }
    
    removeObject(obj: any, selData: any){
        let index = selData.indexOf(obj);
        selData.splice(index, 1);
        this.setState({selectedData: selData});
    }

    getSelection = () => {
        return this.state.selectedData;
    };
    
    displayTable = () => {
        const retData = [];
        const { tableData } = this.state;
        const keys = Object.keys(tableData);
        for (let i = 0; i<keys.length; i++) {
            retData.push(this.renderTable(tableData[keys[i]], i, keys[i]));
        }
        return retData;
    }

    renderTable = (res: any, index: any, inputType: any): any => {
        const retData = [];
        const innerTable = [];
        for (let i = 0; i<res.length; i++) {
            const obj = res[i];
            innerTable.push(
                <table className="table-inner" width="100%">
                    <tbody>
                        <tr>
                            <td><input type="checkbox" id={`${index}_${i}`} onChange={e =>this.handleChange(e, obj, i)}/></td>
                            <td>{obj.dashboardUuid}</td>
                            <td><a href="#"><i className="fa fa-eye"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            );
        }
        retData.push(
            <table className="table-tbody first-table" width="100%">
                <tr>
                    <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                        <table width="100%">
                            <tr>
                                <td>
                                    <a href="#">{this.props.inputName}</a>
                                </td>
                                <td>
                                    <a href="#">{inputType}</a>
                                </td>
                                <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                    {innerTable}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        );
        return retData;
    }

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
                        {this.displayTable()}
                    </div>
                )}
            </div>
        );
    }
}