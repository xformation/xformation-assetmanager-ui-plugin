import * as React from 'react';

export class VerifyAndSave extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedData: [],
            selectedDashboards:[],
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

    handleChange(e: any, obj: any, index: any) {
        let isChecked = e.target.checked;
        const {selectedDashboards} = this.state;
        if(isChecked){
            selectedDashboards.push(obj);
            this.setState({selectedDashboards: selectedDashboards});
        }else{
            this.removeObject(obj, selectedDashboards);
        }
    }
    
    removeObject(obj: any, selData: any){
        let index = selData.indexOf(obj);
        selData.splice(index, 1);
        this.setState({selectedDashboards: selData});
    }

    getSelection = () => {
        return this.state.selectedDashboards;
    };
    

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
                    {this.displayTable()}
                </div>
            </div>
        );
    }
}