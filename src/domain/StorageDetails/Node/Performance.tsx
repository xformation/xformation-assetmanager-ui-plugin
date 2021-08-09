import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { VerifyAndSave } from './VerifyAndSave';
import { RestService } from '../../_service/RestService';
import { config } from '../../../config';

export class Performance extends React.Component<any, any>{
    steps: any;
    verifyInputsRef: any;
    enableDashboardRef: any;
    verifyAndSaveRef: any;
    wizardRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            enablePerformanceMonitoring: false,
            inputName: "Performance",
            updatedDashboards:[],
        };
        this.verifyInputsRef = React.createRef();
        this.enableDashboardRef = React.createRef();
        this.wizardRef = React.createRef();
        this.verifyAndSaveRef = React.createRef();
        this.steps = [
            {
                name: "Verify Inputs",
                component: () => <VerifyInputs ref={this.verifyInputsRef}  inputName={this.state.inputName} />
            },
            {
                name: "Enable Dashboard",
                component: () => <EnableDashboard ref={this.enableDashboardRef} inputName={this.state.inputName} selectedData={this.verifyInputsRef.current !== null ? this.verifyInputsRef.current.getSelection() : null}/>
            },
            {
                name: "Preview",
                component: () => <div>Preview</div>
            },
            {
                name: "Verify and save",
                component: () => <VerifyAndSave ref={this.verifyAndSaveRef} inputName={this.state.inputName} selectedData={this.enableDashboardRef.current !== null ? this.enableDashboardRef.current.getSelection() : null}/>
            }
        ]
    }

    componentDidMount(){
        try {
            const tenantId = this.getParameterByName("tenantId", window.location.href);
            const accountId = this.getParameterByName("accountId", window.location.href);
            RestService.getData(`${config.SEARCH_INPUT_CONFIG}?inputType=${this.state.inputName}&accountId=${accountId}`, null, null).then(
                (response: any) => {
                    if(response.length > 0){
                        this.setState({
                            enablePerformanceMonitoring: true,
                        });
                    }
                }, (error: any) => {
                    console.log("Performance. Search input config failed. Error: ", error);
                });
        } catch (err) {
            console.log("Performance. Excepiton in search input config. Error: ", err);
        }
    }

    enablePerformanceMonitoring = () => {
        this.setState({
            enablePerformanceMonitoring: !this.state.enablePerformanceMonitoring,
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

    onSubmit = async () => {
        await this.enableInput();
        await this.exportDashboardsInGrafana();
        await this.updateDashboardsStatusInAppAsset();
        console.log("Assets enabled");
        alert ('Input enabled');
    };
    
    enableInput() {
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);
        let inp = {
            accountId: accountId,
            tenantId: tenantId,
            inputType: this.state.inputName,
            status: 'ACTIVE',
        }
        RestService.add(`${config.ADD_INPUT_CONFIG}`, inp)
        .then((response: any) => {
                console.log("Enable input response : ", response);
            }
        );
    }

    updateDashboardsStatusInAppAsset() {
        const {updatedDashboards} = this.state;
        RestService.add(`${config.UPDATE_APPLICATION_ASSETS}`, updatedDashboards)
        .then((response: any) => {
                console.log("Update assets response : ", response);
            }
        );
    }

    async exportDashboardsInGrafana() {
        const obj = this.verifyAndSaveRef.current.getSelection();
        const {updatedDashboards} = this.state;
        for( let i=0; i<obj.length; i++){
            const selectionData = obj[i];
            console.log("SELECTION DATA :::::::: ",selectionData);
            var dashboard = config.DASHBOARD_JSON;
            dashboard.Uid =`${selectionData.dashboardUuid}`;
            dashboard.Uuid = `${selectionData.dashboardUuid}`;
            dashboard.Slug = `${selectionData.elementSubType}`;
            dashboard.Title =`${selectionData.elementSubType}`;
            dashboard.SourceJsonRef = `https://s3.amazonaws.com/xformation.synectiks.com/${selectionData.title}`;
            dashboard.AccountId = `${selectionData.accountId}`;
            dashboard.TenantId = `${selectionData.tenantId}`;
            dashboard.CloudName = selectionData.type;
            dashboard.ElementType = selectionData.elementType;
             var raw = config.RAW;
            raw.Dashboard = dashboard;
            raw.Message = `${selectionData.dashboardNature}`;

            var json = JSON.stringify(raw);
            // console.log("Object to post : ", json);
            var reqOpt = RestService.postOptionWithAuthentication(json);
            await fetch(config.ADD_DASHBOARDS_TO_GRAFANA, reqOpt)
                .then(response => response.json())
                .then(result => {
                    // console.log("1. Dashboard import in grafana. Response: ",result);
                    var usr = localStorage.getItem(`userInfo`);
                    var userName = '';
                    if(usr){
                        var user = JSON.parse(usr);
                        userName = user.username;
                    }
                    if(result.status === 'success'){
                        var assetStatus = {"user":userName,"id":selectionData.id,"status":"active","appAsset":raw,"grafanaAsset":result};
                        // console.log("2. in if condition", assetStatus);
                        updatedDashboards[i] = assetStatus;
                    }
                })
                .catch(error => console.log('Dashboard import in grafana failed. Error', error));
        }
        this.setState({
            updatedDashboards: updatedDashboards
        })    
    }

    render() {
        const { enablePerformanceMonitoring } = this.state;
        return (
            <>
                {!enablePerformanceMonitoring && (
                    <>
                        <div className="performance-box">
                            <div className="performance-inner">
                                <strong>Performance Monitoring is not enabled yet</strong>
                                <p>To endble Performance Monitoring dashboards you will first have to configure the inputs for data collection</p>
                                <button className="asset-blue-button" onClick={this.enablePerformanceMonitoring}>Enable Performance Monitoring</button>
                            </div>
                        </div>
                        <div className="note-text">
                            <div className="note-text-inner">
                                <p><strong>Note:</strong> This screen will be displayed only for first time setup, if Inputs are already configured we will show list of dashboards as shown in last screen of this process flow</p>
                            </div>
                        </div>
                    </>
                )}
                {enablePerformanceMonitoring && (
                    <Wizard ref={this.wizardRef} steps={this.steps} submitPage={this.onSubmit}/>
                )}
            </>
        );
    }
}