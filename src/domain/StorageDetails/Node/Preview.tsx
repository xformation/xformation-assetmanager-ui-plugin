import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { VerifyAndSave } from './VerifyAndSave';
import { RestService } from '../../_service/RestService';
import { config } from '../../../config';
import AlertMessage from '../../Components/AlertMessage';

export class Preview extends React.Component<any, any>{
    // steps: any;
    // verifyInputsRef: any;
    // enableDashboardRef: any;
    // verifyAndSaveRef: any;
    // wizardRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            cloudType: '',
            elementType: '',
            accountId: '',
            tenantId:'',
            inputName: this.props.inputName,
            selectedInput: [],
            selectedDashboards: [],
            activeDashboard: -1,
            previewDashboardJson: ''
        };
    }

    componentDidUpdate(previousProps: any, previousState: any){
        if(this.props.selectedInput !== previousProps.selectedInput){
            const selectedInput = this.props.selectedInput;
            this.setState({
                selectedInput
            })
        }
        if(this.props.selectedDashboards !== previousProps.selectedDashboards){
            const selectedDashboards = this.props.selectedDashboards;
            this.setState({
                selectedDashboards
            })
        }
    }

    async componentDidMount() {
        const cloud = this.getParameterByName("cloud", window.location.href);
        const type = this.getParameterByName("type", window.location.href);
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);
        this.setState({
            cloudType: cloud,
            elementType: type,
            accountId: accountId,
            tenantId: tenantId
        }); 
        var url = `${config.PREVIEW_DASHBOARDS_URL}?cloudType=${cloud}&elementType=${type}&accountId=${accountId}&tenantId=${tenantId}&inputType=${this.props.inputName}`;
        var reqOpt = RestService.optionWithAuthentication('', 'GET');
        await fetch(url, reqOpt)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        previewDashboardJson: result
                    })
                })
                .catch(error => {
                    console.log('Preview dashboard failed. Error', error)
                    this.setState({
                        isSuccess: false
                    })
                });
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
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);

        // console.log('1. Selected Input:::::::::::::: ', selectedInput);
        if (selectedInput && selectedDashboards) {
            const retData = [];
            // console.log('2. Selected selectedDashboards:::::::::::::: ',selectedDashboards);
            for (let i = 0; i < selectedInput.length; i++) {
                let obj = selectedInput[i];
                for (let j = 0; j < selectedDashboards.length; j++) {
                    const selectionData = selectedDashboards[j];
                    const title = cloud + "_" + type + "_" + obj.name+"_"+selectionData.dashboardUuid;

                    retData.push(<div title={title} key={selectionData.dashboardUuid} className={`dashboard-side-tab ${activeDashboard === j ? 'active' : ''}`} onClick={() => this.setState({ activeDashboard: j, iFrameLoaded: false })}>
                        <div className="tab-name">{title}</div>
                    </div>);
                }
            }
            // for (let i = 0; i < viewJson.dashboards.length; i++) {
            //     const dashboard = viewJson.dashboards[i];
            //     retData.push(<div title={dashboard.Title} key={dashboard.Uid} className={`dashboard-side-tab ${activeDashboard === i ? 'active' : ''}`} onClick={() => this.setState({ activeDashboard: i, iFrameLoaded: false })}>
            //         <div className="tab-name">{dashboard.Title}</div>
            //     </div>);
            // }
            return retData;
        }
        return [];
    };

    render() {
        const { cloudType, elementType, accountId, tenantId, previewDashboardJson } = this.state;
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
                                <iframe src={`/jsondashboard?data=${previewDashboardJson}`} onLoad={() => { this.setState({ iFrameLoaded: true }) }}></iframe>
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