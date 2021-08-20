import * as React from 'react';
import { RestService } from '../../_service/RestService';
import { config } from '../../../config';

export class EnableDashboard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedData: [],
            enabledDashboards:[],
        };
    }

    getParameterByName = (name: any, url: any) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    async componentWillMount() {
        const cloud = this.getParameterByName("cloud", window.location.href);
        const type = this.getParameterByName("type", window.location.href);
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);
        try {
            await RestService.getData(`${config.GET_APPLICATION_ASSETS_BY_INPUT_TYPE}?inputType=${this.props.inputName}&tenantId=${tenantId}&accountId=${accountId}&cloud=${cloud}&type=${type}`, null, null).then(
                (response: any) => {
                    console.log("EnableDashboard. Application assets: ",response);
                    if(response.code !== 417){
                        this.setState({
                            selectedData: response.object,
                        });    
                    }
                    // this.setState({
                    //     selectedData: response,
                    // });
                }, (error: any) => {
                    console.log("EnableDashboard. Search application assets failed. Error: ", error);
                });
        } catch (err) {
            console.log("Exception in EnableDashboard. Error: ", err);
        }
    }
    // componentDidUpdate(previousProps: any, previousState: any){
    //     if(this.props.selectedData !== previousProps.selectedData){
    //         const selectedData = this.props.selectedData;
    //         this.setState({
    //             selectedData
    //         })
    //     }
    // }

    getSelection = () => {
        return this.state.enabledDashboards;
    };
    
    handleChange(e: any, obj: any, index: any) {
        let isChecked = e.target.checked;
        const {enabledDashboards} = this.state;
        if(isChecked){
            enabledDashboards.push(obj);
            this.setState({enabledDashboards: enabledDashboards});
        }else{
            this.removeObject(obj, enabledDashboards);
        }
    }
    
    removeObject(obj: any, selData: any){
        let index = selData.indexOf(obj);
        selData.splice(index, 1);
        this.setState({enabledDashboards: selData});
    }


    displayTable = () => {
        const retData = [];
        const { selectedData } = this.state;
        const keys = Object.keys(selectedData);
        // const obj = selectedData[keys];
        console.log("Keys : "+keys);
        // console.log("Array Object : ", obj);
        for (let j = 0; j<keys.length; j++) {
            const ouerObj = selectedData[keys[j]];
            for (let i = 0; i<ouerObj.length; i++) {
                const obj = ouerObj[i];
            
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
                                            <a href="#">{obj.inputType}</a>
                                        </td>
                                        <td style={{ paddingLeft: '0', paddingRight: '0' }}>
                                            <table className="table-inner" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td><input type="checkbox" id={`${i}`} onChange={e =>this.handleChange(e, obj, i)}/></td>
                                                        <td>{obj.dashboardUuid}</td>
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
                );
            }
        }
        return retData;
    }

    render() {
        const { assets } = this.state;
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
                    {this.displayTable()}
                </div>
            </div>
        );
    }
}