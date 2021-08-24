import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { VerifyAndSave } from './VerifyAndSave';
import { RestService } from '../../_service/RestService';
import { config } from '../../../config';
import AlertMessage from '../../components/AlertMessage';

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
            inputConfig: null,
            inputName: "Performance",
            updatedDashboards:[],
            isAlertOpen: false, 
            severity: null, 
            message: null,
            isSuccess: true,
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

    async componentDidMount(){
        try {
            const cloud = this.getParameterByName("cloud", window.location.href);
            const type = this.getParameterByName("type", window.location.href);
            const tenantId = this.getParameterByName("tenantId", window.location.href);
            const accountId = this.getParameterByName("accountId", window.location.href);
            RestService.getData(`${config.SEARCH_INPUT_CONFIG}?inputType=${this.state.inputName}&accountId=${accountId}&tenantId=${tenantId}`, null, null).then(
                (response: any) => {
                    if(response.code !== 417 && response.object.length > 0){
                        this.setState({
                            enablePerformanceMonitoring: true,
                            inputConfig: response.object[0]
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
        const {inputConfig} = this.state;
        this.setState({
            isSuccess: true
        })
        let selectedInput = this.verifyInputsRef.current.getSelection();
        let selectedDashboards = this.enableDashboardRef.current.getSelection();
        if( selectedInput.length ===  0){
            this.wizardRef.current.setActiveStep(0);
        }
        if(selectedDashboards.length === 0){
            this.wizardRef.current.setActiveStep(1);
        }
        
        console.log("1. Adding dashboards in grafana");
        for(let i=0; i< selectedInput.length; i++){
            let dsObj = selectedInput[i];
            await this.exportDashboardsInGrafana(dsObj, `${i}`);
        }
        if(!this.state.isSuccess){
            this.setState({
                isAlertOpen: true,
                message: 'Enabling performance dashboards failed',
                severity: config.SEVERITY_ERROR,
                isSuccess: true
            })
            return;
        }
        
        console.log("2. Updating dashboards status in asset service");
        await this.updateDashboardsStatusInAppAsset();
        if(!this.state.isSuccess){
            this.setState({
                isAlertOpen: true,
                message: 'Enabling performance dashboards failed',
                severity: config.SEVERITY_ERROR,
                isSuccess: true
            })
            return;
        }

        console.log("3. Updating inputs status in asset service");
        for(let i=0; i< selectedInput.length; i++){
            let dsObj = selectedInput[i];
            await this.updateInput(dsObj);
            if(!this.state.isSuccess){
                this.setState({
                    isAlertOpen: true,
                    message: 'Enabling performance dashboards failed',
                    severity: config.SEVERITY_ERROR,
                    isSuccess: true
                })
                return;
            }
        }
        console.log('4. Input config : ',inputConfig);
        if(inputConfig === null) {
            console.log("5. Adding input config in asset service");
            await this.addInputConfig();
        }
        if(!this.state.isSuccess){
            this.setState({
                isAlertOpen: true,
                message: 'Enabling performance dashboards failed',
                severity: config.SEVERITY_ERROR,
                isSuccess: true
            })
            return;
        }
        this.setState({
            isAlertOpen: true,
            message: 'Performance dashboards enabled',
            severity: config.SEVERITY_SUCCESS,
            isSuccess: true
        })
        
    };

    
    async exportDashboardsInGrafana(dsObj: any, index: any) {
        // const obj = this.verifyAndSaveRef.current.getSelection();
        const obj = this.enableDashboardRef.current.getSelection();
        let dsbAry: any = [];
        var usr = localStorage.getItem(`userInfo`);
        for( let i=0; i<obj.length; i++){
            const selectionData = obj[i];
            // console.log("Selected dashboard: ",selectionData);
            var dashboard = config.DASHBOARD_JSON;
            // dashboard.Uid =`${selectionData.dashboardUuid}`;
            dashboard.Uuid = `${selectionData.dashboardUuid}`;
            dashboard.Slug = `${selectionData.fileName}`;
            // dashboard.Title =`${selectionData.fileName}`;
            dashboard.Title =`${index}${i}`;
            dashboard.SourceJsonRef = ``;
            dashboard.AccountId = `${selectionData.accountId}`;
            dashboard.TenantId = `${selectionData.tenantId}`;
            dashboard.CloudName = selectionData.type;
            dashboard.ElementType = selectionData.elementType;
            dashboard.InputSourceId = dsObj.name;
            dashboard.FileName = selectionData.fileName;
            dashboard.InputType = this.state.inputName;
             var raw = config.RAW;
            raw.Dashboard = dashboard;
            raw.Message = `${selectionData.dashboardNature}`;
            // console.log("Final dashboard to be exported: ",raw);
            var json = JSON.stringify(raw);
            // console.log("Object to post : ", json);
            var reqOpt = RestService.postOptionWithAuthentication(json);
            await fetch(config.ADD_DASHBOARDS_TO_GRAFANA, reqOpt)
                .then(response => response.json())
                .then(result => {
                    // console.log("1. Dashboard import in grafana. Response: ",result);
                    var userName = '';
                    if(usr){
                        var user = JSON.parse(usr);
                        userName = user.username;
                    }
                    if(result.status === 'success'){
                        var assetStatus = {"user":userName,"id":selectionData.id,"status":"ENABLED","appAsset":raw,"grafanaAsset":result};
                        dsbAry[i] = assetStatus;
                    }else{
                        var assetStatus = {"user":userName,"id":selectionData.id,"status":"FAILED","appAsset":raw,"grafanaAsset":result};
                        dsbAry[i] = assetStatus;
                        this.setState({
                            isSuccess: false
                        })
                    }
                })
                .catch(error => {
                    console.log('Dashboard import in grafana failed. Error', error)
                    this.setState({
                        isSuccess: false
                    }) 
                });
        }
        this.setState({
            updatedDashboards: dsbAry
        })    
    }

    updateDashboardsStatusInAppAsset() {
        const {updatedDashboards} = this.state;
        RestService.add(`${config.BULK_UPDATE_APPLICATION_ASSETS}`, updatedDashboards)
            .then((response: any) => {
                    console.log("Update assets response : ", response);
                    if(response.code === 417){
                        this.setState({
                            isSuccess: false
                        })    
                    }
                })
                .catch(error => {
                    console.log('Updating dashboard status failed. Error', error)
                    this.setState({
                        isSuccess: false
                    }) 
                });
    }

    updateInput(dsObj: any) {
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);
        let inp = {
            id: dsObj.id,
            status: 'ACTIVE',
        }
        RestService.add(`${config.UPDATE_INPUT}`, inp)
            .then((response: any) => {
                console.log("Update input response : ", response);
                if(response.code === 417){
                    this.setState({
                        isSuccess: false
                    })    
                }
            })
            .catch(error => {
                console.log('Updating input status failed. Error', error)
                this.setState({
                    isSuccess: false
                }) 
            });
    }

    addInputConfig() {
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
                console.log("Add input_config response : ", response);
                if(response.code === 417){
                    this.setState({
                        isSuccess: false
                    })    
                }
            })
            .catch(error => {
                console.log('Add input_config failed. Error', error)
                this.setState({
                    isSuccess: false
                }) 
            });
    }

    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false,
            message: '',
            severity: ''
        })
    }

    render() {
        const { enablePerformanceMonitoring, isAlertOpen, severity, message } = this.state;
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
                    <>
                    <AlertMessage handleCloseAlert={this.handleCloseAlert} open={isAlertOpen} severity={severity} msg={message}></AlertMessage>
                    <Wizard ref={this.wizardRef} steps={this.steps} submitPage={this.onSubmit}/>
                    </>
                )}
            </>
        );
    }
}