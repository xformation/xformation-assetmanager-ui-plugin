import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { VerifyAndSave } from './VerifyAndSave';
import { RestService } from '../../_service/RestService';
import { config } from '../../../config';
import AlertMessage from '../../Components/AlertMessage';

export class Preview extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            inputName: this.props.inputName,
            selectedInput: [],
            selectedDashboards: [],
            activeDashboard: [0, 0],
            isLoading: false,
        };
    }

    componentDidUpdate(previousProps: any, previousState: any) {
        if (this.props.selectedInput !== previousProps.selectedInput) {
            const selectedInput = this.props.selectedInput;
            this.setState({
                selectedInput,
                activeDashboard: [0, this.state.activeDashboard[1]]
            })
        }
        if (this.props.selectedDashboards !== previousProps.selectedDashboards) {
            const selectedDashboards = this.props.selectedDashboards;
            this.setState({
                selectedDashboards,
                activeDashboard: [this.state.activeDashboard[0], 0]
            })
        }
    }

    getParameterByName = (name: any, url: any) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    renderDashboardList = () => {
        const { selectedInput, selectedDashboards, activeDashboard } = this.state;
        const cloud = this.getParameterByName("cloud", window.location.href);
        const type = this.getParameterByName("type", window.location.href);
        if (selectedInput && selectedDashboards) {
            const retData = [];
            for (let i = 0; i < selectedInput.length; i++) {
                let obj = selectedInput[i];
                for (let j = 0; j < selectedDashboards.length; j++) {
                    const selectionData = selectedDashboards[j];
                    const title = cloud + "_" + type + "_" + obj.name + "_" + selectionData.dashboardUuid;
                    retData.push(<div title={title} key={selectionData.dashboardUuid} className={`dashboard-side-tab ${activeDashboard[0] === i && activeDashboard[1] === j ? 'active' : ''}`} onClick={() => this.setState({ activeDashboard: [i, j], iFrameLoaded: false })}>
                        <div className="tab-name">{title}</div>
                    </div>);
                }
            }
            return retData;
        }
        return [];
    };

    renderIframe = () => {
        const { activeDashboard, selectedDashboards, selectedInput } = this.state;
        const input = selectedInput[activeDashboard[0]]
        const dashboard = selectedDashboards[activeDashboard[1]];
        if (input && dashboard) {
            return <iframe key={`${activeDashboard[0]}-${activeDashboard[1]}`} src={`/jsondashboard?cloudType=${dashboard.type}&elementType=${dashboard.elementType}&accountId=${dashboard.accountId}&tenantId=${dashboard.tenantId}&inputType=${dashboard.inputType}&fileName=${dashboard.fileName}&dataSource=${input.name}`} onLoad={() => { this.setState({ iFrameLoaded: true }) }}></iframe>;
        }
        return <div>No Dashboard Selected</div>
    };

    render() {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button style={{ marginTop: "10px", float: "right", marginRight: "10px" }} onClick={() => this.setState({ showConfigWizard: true })} className="blue-button m-b-0">Configure</button>
                </div>
                <div className="dashboard-view-container">
                    <aside>{this.renderDashboardList()}</aside>
                    <div className="dashboard-view">
                        {
                            <>
                                {this.renderIframe()}
                                <div style={{ textAlign: "center", display: true ? 'none' : '', marginTop: "20px" }}>
                                    Dashboard is loading...
                                </div>
                            </>
                        }
                    </div>
                </div>
            </>
        );
    }
}