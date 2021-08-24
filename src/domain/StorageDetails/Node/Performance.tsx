import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { VerifyAndSave } from './VerifyAndSave';
import { RestService } from '../../_service/RestService';
import { config } from '../../../config';
import AlertMessage from './../../components/AlertMessage';

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
            inputConfig: {
                "dashboards": [
                    {
                        "Id": 132,
                        "Uid": "3h77DBn7k",
                        "Slug": "aws_vpc_test_cloud_test_cloudwatch_10",
                        "OrgId": 1,
                        "GnetId": 0,
                        "Version": 1,
                        "PluginId": "",
                        "Created": "2021-08-20T15:44:56+05:30",
                        "Updated": "2021-08-20T15:44:56+05:30",
                        "UpdatedBy": 1,
                        "CreatedBy": 1,
                        "FolderId": 0,
                        "IsFolder": false,
                        "HasAcl": false,
                        "Title": "AWS_VPC_Test_Cloud_Test_CloudWatch_10",
                        "Data": {
                            "AccountId": "1234",
                            "CloudName": "AWS",
                            "CreatedBy": "1",
                            "Data": "",
                            "ElementType": "VPC",
                            "FileName": "test_ds.json",
                            "FolderId": 0,
                            "GnetId ": 0,
                            "HasAcl": false,
                            "InputSourceId": "Test_CloudWatch",
                            "InputType": "Performance",
                            "IsCloud": true,
                            "IsFolder": false,
                            "OrgId": 1,
                            "PluginId": "",
                            "Slug": "test_ds.json",
                            "SourceJsonRef": "",
                            "TenantId": "78",
                            "Title": "10",
                            "Uid": "",
                            "UpdatedBy": "1",
                            "Uuid": "uuid-1",
                            "Version": "1",
                            "title": "AWS_VPC_Test_Cloud_Test_CloudWatch_10",
                            "uid": "3h77DBn7k",
                            "version": 1
                        },
                        "Uuid": "uuid-1",
                        "SourceJsonRef": "",
                        "InputSourceId": "Test_CloudWatch",
                        "AccountId": "1234",
                        "TenantId": "78",
                        "IsCloud": true,
                        "CloudName": "AWS",
                        "ElementType": "VPC",
                        "FileName": "test_ds.json",
                        "InputType": "Performance"
                    },
                    {
                        "Id": 130,
                        "Uid": "QfGnDB7nk",
                        "Slug": "aws_vpc_test_cloud_test3_cloudwatch_00",
                        "OrgId": 1,
                        "GnetId": 0,
                        "Version": 1,
                        "PluginId": "",
                        "Created": "2021-08-20T15:44:55+05:30",
                        "Updated": "2021-08-20T15:44:55+05:30",
                        "UpdatedBy": 1,
                        "CreatedBy": 1,
                        "FolderId": 0,
                        "IsFolder": false,
                        "HasAcl": false,
                        "Title": "AWS_VPC_Test_Cloud_Test3_CloudWatch_00",
                        "Data": {
                            "AccountId": "1234",
                            "CloudName": "AWS",
                            "CreatedBy": "1",
                            "Data": "",
                            "ElementType": "VPC",
                            "FileName": "test_ds.json",
                            "FolderId": 0,
                            "GnetId ": 0,
                            "HasAcl": false,
                            "InputSourceId": "Test3_CloudWatch",
                            "InputType": "Performance",
                            "IsCloud": true,
                            "IsFolder": false,
                            "OrgId": 1,
                            "PluginId": "",
                            "Slug": "test_ds.json",
                            "SourceJsonRef": "",
                            "TenantId": "78",
                            "Title": "00",
                            "Uid": "",
                            "UpdatedBy": "1",
                            "Uuid": "uuid-1",
                            "Version": "1",
                            "title": "AWS_VPC_Test_Cloud_Test3_CloudWatch_00",
                            "uid": "QfGnDB7nk",
                            "version": 1
                        },
                        "Uuid": "uuid-1",
                        "SourceJsonRef": "",
                        "InputSourceId": "Test3_CloudWatch",
                        "AccountId": "1234",
                        "TenantId": "78",
                        "IsCloud": true,
                        "CloudName": "AWS",
                        "ElementType": "VPC",
                        "FileName": "test_ds.json",
                        "InputType": "Performance"
                    },
                    {
                        "Id": 131,
                        "Uid": "Vzn7DB7nk",
                        "Slug": "aws_vpc_test_cloud_test3_cloudwatch_01",
                        "OrgId": 1,
                        "GnetId": 0,
                        "Version": 1,
                        "PluginId": "",
                        "Created": "2021-08-20T15:44:55+05:30",
                        "Updated": "2021-08-20T15:44:55+05:30",
                        "UpdatedBy": 1,
                        "CreatedBy": 1,
                        "FolderId": 0,
                        "IsFolder": false,
                        "HasAcl": false,
                        "Title": "AWS_VPC_Test_Cloud_Test3_CloudWatch_01",
                        "Data": {
                            "AccountId": "1234",
                            "CloudName": "AWS",
                            "CreatedBy": "1",
                            "Data": "",
                            "ElementType": "VPC",
                            "FileName": "test_ds.json",
                            "FolderId": 0,
                            "GnetId ": 0,
                            "HasAcl": false,
                            "InputSourceId": "Test3_CloudWatch",
                            "InputType": "Performance",
                            "IsCloud": true,
                            "IsFolder": false,
                            "OrgId": 1,
                            "PluginId": "",
                            "Slug": "test_ds.json",
                            "SourceJsonRef": "",
                            "TenantId": "78",
                            "Title": "01",
                            "Uid": "",
                            "UpdatedBy": "1",
                            "Uuid": "uuid-2",
                            "Version": "1",
                            "title": "AWS_VPC_Test_Cloud_Test3_CloudWatch_01",
                            "uid": "Vzn7DB7nk",
                            "version": 1
                        },
                        "Uuid": "uuid-2",
                        "SourceJsonRef": "",
                        "InputSourceId": "Test3_CloudWatch",
                        "AccountId": "1234",
                        "TenantId": "78",
                        "IsCloud": true,
                        "CloudName": "AWS",
                        "ElementType": "VPC",
                        "FileName": "test_ds.json",
                        "InputType": "Performance"
                    },
                    {
                        "Id": 133,
                        "Uid": "eu7nDf7nk",
                        "Slug": "aws_vpc_test_cloud_test_cloudwatch_11",
                        "OrgId": 1,
                        "GnetId": 0,
                        "Version": 1,
                        "PluginId": "",
                        "Created": "2021-08-20T15:44:56+05:30",
                        "Updated": "2021-08-20T15:44:56+05:30",
                        "UpdatedBy": 1,
                        "CreatedBy": 1,
                        "FolderId": 0,
                        "IsFolder": false,
                        "HasAcl": false,
                        "Title": "AWS_VPC_Test_Cloud_Test_CloudWatch_11",
                        "Data": {
                            "AccountId": "1234",
                            "CloudName": "AWS",
                            "CreatedBy": "1",
                            "Data": "",
                            "ElementType": "VPC",
                            "FileName": "test_ds.json",
                            "FolderId": 0,
                            "GnetId ": 0,
                            "HasAcl": false,
                            "InputSourceId": "Test_CloudWatch",
                            "InputType": "Performance",
                            "IsCloud": true,
                            "IsFolder": false,
                            "OrgId": 1,
                            "PluginId": "",
                            "Slug": "test_ds.json",
                            "SourceJsonRef": "",
                            "TenantId": "78",
                            "Title": "11",
                            "Uid": "",
                            "UpdatedBy": "1",
                            "Uuid": "uuid-2",
                            "Version": "1",
                            "title": "AWS_VPC_Test_Cloud_Test_CloudWatch_11",
                            "uid": "eu7nDf7nk",
                            "version": 1
                        },
                        "Uuid": "uuid-2",
                        "SourceJsonRef": "",
                        "InputSourceId": "Test_CloudWatch",
                        "AccountId": "1234",
                        "TenantId": "78",
                        "IsCloud": true,
                        "CloudName": "AWS",
                        "ElementType": "VPC",
                        "FileName": "test_ds.json",
                        "InputType": "Performance"
                    }
                ]
            },
            inputName: "Performance",
            updatedDashboards: [],
            isAlertOpen: false,
            severity: null,
            message: null,
            isSuccess: true,
            activeDashboard: -1,
            showConfigWizard: false,
            iFrameLoaded: false,
        };
        this.verifyInputsRef = React.createRef();
        this.enableDashboardRef = React.createRef();
        this.wizardRef = React.createRef();
        this.verifyAndSaveRef = React.createRef();
        this.steps = [
            {
                name: "Verify Inputs",
                component: () => <VerifyInputs ref={this.verifyInputsRef} inputName={this.state.inputName} />
            },
            {
                name: "Enable Dashboard",
                component: () => <EnableDashboard ref={this.enableDashboardRef} inputName={this.state.inputName} selectedData={this.verifyInputsRef.current !== null ? this.verifyInputsRef.current.getSelection() : null} />
            },
            {
                name: "Preview",
                component: () => <div>Preview</div>
            },
            {
                name: "Verify and save",
                component: () => <VerifyAndSave ref={this.verifyAndSaveRef} inputName={this.state.inputName} selectedData={this.enableDashboardRef.current !== null ? this.enableDashboardRef.current.getSelection() : null} />
            }
        ]
    }

    async componentDidMount() {
        // try {
        //     const cloud = this.getParameterByName("cloud", window.location.href);
        //     const type = this.getParameterByName("type", window.location.href);
        //     const tenantId = this.getParameterByName("tenantId", window.location.href);
        //     const accountId = this.getParameterByName("accountId", window.location.href);
        //     RestService.getData(`${config.SEARCH_INPUT_CONFIG}?inputType=${this.state.inputName}&accountId=${accountId}&tenantId=${tenantId}`, null, null).then(
        //         (response: any) => {
        //             if(response.code !== 417 && response.object.length > 0){
        //                 this.setState({
        //                     enablePerformanceMonitoring: true,
        //                     inputConfig: response.object[0]
        //                 });
        //             }
        //         }, (error: any) => {
        //             console.log("Performance. Search input config failed. Error: ", error);
        //         });
        // } catch (err) {
        //     console.log("Performance. Excepiton in search input config. Error: ", err);
        // }
        const { inputConfig } = this.state;
        if (inputConfig && inputConfig.dashboards) {
            this.setState({
                showConfigWizard: false,
                activeDashboard: 0
            });
        } else {
            this.setState({
                showConfigWizard: true,
            });
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
        const { inputConfig } = this.state;
        this.setState({
            isSuccess: true
        })
        let selectedInput = this.verifyInputsRef.current.getSelection();
        let selectedDashboards = this.enableDashboardRef.current.getSelection();
        if (selectedInput.length === 0) {
            this.wizardRef.current.setActiveStep(0);
        }
        if (selectedDashboards.length === 0) {
            this.wizardRef.current.setActiveStep(1);
        }

        console.log("1. Adding dashboards in grafana");
        for (let i = 0; i < selectedInput.length; i++) {
            let dsObj = selectedInput[i];
            await this.exportDashboardsInGrafana(dsObj, `${i}`);
        }
        if (!this.state.isSuccess) {
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
        if (!this.state.isSuccess) {
            this.setState({
                isAlertOpen: true,
                message: 'Enabling performance dashboards failed',
                severity: config.SEVERITY_ERROR,
                isSuccess: true
            })
            return;
        }

        console.log("3. Updating inputs status in asset service");
        for (let i = 0; i < selectedInput.length; i++) {
            let dsObj = selectedInput[i];
            await this.updateInput(dsObj);
            if (!this.state.isSuccess) {
                this.setState({
                    isAlertOpen: true,
                    message: 'Enabling performance dashboards failed',
                    severity: config.SEVERITY_ERROR,
                    isSuccess: true
                })
                return;
            }
        }
        console.log('4. Input config : ', inputConfig);
        if (inputConfig === null) {
            console.log("5. Adding input config in asset service");
            await this.addInputConfig();
        }
        if (!this.state.isSuccess) {
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
        for (let i = 0; i < obj.length; i++) {
            const selectionData = obj[i];
            // console.log("Selected dashboard: ",selectionData);
            var dashboard = config.DASHBOARD_JSON;
            // dashboard.Uid =`${selectionData.dashboardUuid}`;
            dashboard.Uuid = `${selectionData.dashboardUuid}`;
            dashboard.Slug = `${selectionData.fileName}`;
            // dashboard.Title =`${selectionData.fileName}`;
            dashboard.Title = `${index}${i}`;
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
                    if (usr) {
                        var user = JSON.parse(usr);
                        userName = user.username;
                    }
                    if (result.status === 'success') {
                        var assetStatus = { "user": userName, "id": selectionData.id, "status": "ENABLED", "appAsset": raw, "grafanaAsset": result };
                        dsbAry[i] = assetStatus;
                    } else {
                        var assetStatus = { "user": userName, "id": selectionData.id, "status": "FAILED", "appAsset": raw, "grafanaAsset": result };
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
        const { updatedDashboards } = this.state;
        RestService.add(`${config.BULK_UPDATE_APPLICATION_ASSETS}`, updatedDashboards)
            .then((response: any) => {
                console.log("Update assets response : ", response);
                if (response.code === 417) {
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
                if (response.code === 417) {
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
                if (response.code === 417) {
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

    renderDashboardList = () => {
        const { inputConfig, activeDashboard } = this.state;
        if (inputConfig && inputConfig.dashboards) {
            const retData = [];
            for (let i = 0; i < inputConfig.dashboards.length; i++) {
                const dashboard = inputConfig.dashboards[i];
                retData.push(<div title={dashboard.Title} key={dashboard.Uuid} className={`dashboard-side-tab ${activeDashboard === i ? 'active' : ''}`} onClick={() => this.setState({ activeDashboard: i, iFrameLoaded: false })}>
                    <div className="tab-name">{dashboard.Title}</div>
                </div>);
            }
            return retData;
        }
        return [];
    };

    render() {
        const { enablePerformanceMonitoring, isAlertOpen, severity, message, inputConfig, activeDashboard, showConfigWizard, iFrameLoaded } = this.state;
        let activeDB = null;
        if (inputConfig && inputConfig.dashboards && inputConfig.dashboards[activeDashboard]) {
            activeDB = inputConfig.dashboards[activeDashboard];
        }
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
                        {
                            !showConfigWizard &&
                            <>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <button style={{ marginTop: "10px", float: "right", marginRight: "10px" }} onClick={() => this.setState({ showConfigWizard: true })} className="blue-button m-b-0">Configure</button>
                                </div>
                                <div className="dashboard-view-container">
                                    <aside>{this.renderDashboardList()}</aside>
                                    <div className="dashboard-view">
                                        {
                                            activeDB &&
                                            <>
                                                <iframe style={{ display: `${iFrameLoaded ? '' : 'none'}` }} src={`/justdashboard?uid=${activeDB.Uuid}&slud=${activeDB.Slug}`} onLoad={() => { this.setState({ iFrameLoaded: true }) }}></iframe>
                                                <div style={{ textAlign: "center", display: iFrameLoaded ? 'none' : '', marginTop: "20px" }}>
                                                    Dashboard is loading...
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </>
                        }
                        {
                            showConfigWizard &&
                            <Wizard ref={this.wizardRef} steps={this.steps} submitPage={this.onSubmit} />
                        }
                    </>
                )}
            </>
        );
    }
}