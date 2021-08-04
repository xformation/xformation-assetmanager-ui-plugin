import * as React from 'react';

export class EnableDashboard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedData: [],
            enabledDashboards:[],
        };
    }

    componentDidUpdate(previousProps: any, previousState: any){
        if(this.props.selectedData !== previousProps.selectedData){
            const selectedData = this.props.selectedData;
            this.setState({
                selectedData
            })
        }
    }

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
        for (let i = 0; i<selectedData.length; i++) {
            const obj = selectedData[i];
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