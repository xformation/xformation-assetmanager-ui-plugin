import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';
import { SelectCloudFilter } from '../../Components/SelectCloudFilter';
import { RestService } from '../_service/RestService';
import { AddAccount } from '../Account/AddAccount';
// import { AddEnviornment } from './AddEnviornment';
// import { EditEnviornment } from './EditEnviornment';
import { CreateButtonInput } from "../CreateButtonInput/CreateButtonInput";
import Rbac from '../../components/Rbac';
export class Environments extends React.Component<any, any> {
    breadCrumbs: any;
    AddAccountRef: any;
    AddfolderRef: any;
    EditEnviornmentRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            awsAccounts:0,
            azureAccounts:0,
            gcpAccounts:0,
            synectiksAccounts:0,
            kubernatesAccounts:0,
            Environment: [],
            displaygetEnvironmentData: [],
            isApiCalled: false,
            codeEditorValue: "",
            optionJsonData: [
                {
                    name: 'OU',
                    value: 'ou',
                    isChecked: false,
                    subdata: [
                        { name: 'IT Department', value: 'itdepartment', isChecked: false },
                        { name: 'Network Department', value: 'networkdepartment', isChecked: false },
                        { name: 'Development', value: 'development', isChecked: false },
                        { name: 'Testing', value: 'testing', isChecked: false },
                    ],
                },
                {
                    name: 'Status',
                    value: 'status',
                    isChecked: false,
                    subdata: [
                        { name: 'Enable', value: 'enable', isChecked: false },
                        { name: 'Disable', value: 'disable', isChecked: false },
                    ],
                },
                {
                    name: 'No of Assets',
                    value: 'noOFssets',
                    isChecked: false,
                    subdata: [],
                },
                {
                    name: 'Platform',
                    value: 'platform',
                    isChecked: false,
                    subdata: [],
                }, {
                    name: 'Logs',
                    value: 'logs',
                    isChecked: false,
                    subdata: [],
                }, {
                    name: 'Performance & Availability',
                    value: 'availabiity',
                    isChecked: false,
                    subdata: []
                }
            ],
            displayJsonData: [
                {
                    name: 'OU',
                    value: 'ou',
                    isChecked: false,
                    subdata: [
                        { name: 'IT Department', value: 'itdepartment', isChecked: false },
                        { name: 'Network Department', value: 'networkdepartment', isChecked: false },
                        { name: 'Development', value: 'development', isChecked: false },
                        { name: 'Testing', value: 'testing', isChecked: false },
                    ],
                },
                {
                    name: 'Status',
                    value: 'status',
                    isChecked: false,
                    subdata: [
                        { name: 'Enable', value: 'enable', isChecked: false },
                        { name: 'Disable', value: 'disable', isChecked: false },
                    ],
                },
                {
                    name: 'No of Assets',
                    value: 'noOFssets',
                    isChecked: false,
                    subdata: [],
                },
                {
                    name: 'Platform',
                    value: 'platform',
                    isChecked: false,
                    subdata: [],
                }, {
                    name: 'Logs',
                    value: 'logs',
                    isChecked: false,
                    subdata: [],
                }, {
                    name: 'Performance & Availability',
                    value: 'availabiity',
                    isChecked: false,
                    subdata: []
                }
            ],
            
            selectedTeg: [],
            showTagFilter: false,
            showRecentFilter: false,
            showAddNewFilter: false,
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Assets | Environments",
                isCurrentPage: true
            }
        ];
       
        this.AddAccountRef = React.createRef();
        this.AddfolderRef = React.createRef();
        this.EditEnviornmentRef = React.createRef();
    }

    displaySelectedTags = () => {
        const { optionJsonData } = this.state;
        let retData = [];
        if (optionJsonData.length > 0) {
            for (let i = 0; i < optionJsonData.length; i++) {
                if (optionJsonData[i].isChecked) {
                    retData.push(
                        <div className="fliter-selected" onClick={() => this.setChildData(optionJsonData[i])}>{optionJsonData[i].name} <i className="fa fa-times" onClick={() => this.removeSelectedTag(optionJsonData[i].value)}></i></div>
                    );
                    if (optionJsonData[i].subdata) {
                        for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                            if (optionJsonData[i].subdata[j].isChecked) {
                                retData.push(
                                    <div className="fliter-selected" onClick={() => this.setState({ showTagFilter: false })}>{optionJsonData[i].subdata[j].name} <i className="fa fa-times" onClick={() => this.removeSelectedTag(optionJsonData[i].subdata[j].value)}></i></div>
                                );
                            }
                        }
                    }
                }
            }
        }
        return retData;
    }

    setChildData = (data: any) => {
        if (data.subdata.length > 0) {
            this.setState({
                showTagFilter: true,
                displayJsonData: data.subdata,
            })
        } else {
            this.setState({
                showTagFilter: false,
            })
        }
    }

    removeSelectedTag = (value: any) => {
        const { optionJsonData } = this.state;
        for (let i = 0; i < optionJsonData.length; i++) {
            let row = optionJsonData[i];
            if (row.value == value) {
                optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
            } else {
                if (optionJsonData[i].subdata) {
                    for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                        if (optionJsonData[i].subdata[j].value == value) {
                            optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
                        }
                    }
                }
            }
        }
        this.setState({
            optionJsonData,
            displayJsonData: optionJsonData,
        })
    }

    displayTagList = () => {
        const { displayJsonData } = this.state;
        let retData = [];
        for (let i = 0; i < displayJsonData.length; i++) {
            retData.push(
                <div className="form-check" onClick={() => this.changeHandleState(i, displayJsonData[i].value)}>
                    <input type="checkbox" checked={displayJsonData[i].isChecked} className="checkbox" />
                    <label htmlFor={displayJsonData[i].value}>{displayJsonData[i].name}</label>
                </div>
            );
        }
        return retData;
    }

    changeHandleState = (index: any, value: any) => {
        let { displayJsonData, optionJsonData, selectedTeg } = this.state;
        for (let i = 0; i < optionJsonData.length; i++) {
            if (optionJsonData[i].value === value) {
                if (!selectedTeg.includes(value)) {
                    selectedTeg.push(value);
                    optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
                    if (optionJsonData[i].subdata.length > 0) {
                        displayJsonData = [];
                        for (let k = 0; k < optionJsonData[i].subdata.length; k++) {
                            displayJsonData.push(optionJsonData[i].subdata[k]);
                        }
                        this.setState({
                            displayJsonData,
                        })
                    }
                    else {
                        this.setState({
                            displayJsonData: optionJsonData,
                        });
                    }
                } else {
                    selectedTeg.splice(selectedTeg.indexOf(value), 1);
                    optionJsonData[i].isChecked = !optionJsonData[i].isChecked;
                    displayJsonData = optionJsonData;
                }
            } else {
                if (optionJsonData[i].subdata.length > 0) {
                    displayJsonData = [];
                    for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                        if (optionJsonData[i].subdata[j].value === value) {
                            if (!selectedTeg.includes(value)) {
                                selectedTeg.push(value);
                                optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
                                this.setState({
                                    displayJsonData: optionJsonData,
                                });
                            } else {
                                selectedTeg.splice(selectedTeg.indexOf(value), 1);
                                optionJsonData[i].subdata[j].isChecked = !optionJsonData[i].subdata[j].isChecked;
                                displayJsonData = optionJsonData;
                            }
                        }
                    }
                }
            }
        }
        this.setState({
            selectedTeg
        })
    }
    async componentDidMount() {
       this.getAccountList();
        
      
    }
    
    getAccountList = async () => {
        this.setState({
            isApiCalled: true
        });
        try {
            await RestService.getData(config.GET_ALL_ACCOUNT, null, null).then(
                (response: any) => {
                    this.setState({
                        // Environment: response,
                        displaygetEnvironmentData: response,
                        // result : response.length
                    });
                    console.log("Loading Asstes : ", response);
            });
        } catch (err) {
            console.log("Loading Asstes failed. Error: ", err);
        }
        this.setState({
            isApiCalled: false
        });
    }

    refreshEnvironment = async () => {
        this.getAccountList();
        // this.displayAWSAccountList();
    
    }
    // getEnvioronment = async () => {
    //     const { displaygetEnvironmentData } = this.state;
    //     let retData = [];
        
    //     for (let i = 0; i < displaygetEnvironmentData.length; i++) {
    //         let row = displaygetEnvironmentData[i];
    //         if(row.type=="AWS"){
    //             (row: any) => {
    //                 this.setState({
    //                     Environment: row,
    //                     displaygetEnvironmentData: row,
    //                   result : row.length
    //                 });
    //         }
    //         }
     
    //     }
    // }

    onClickEditAccount = (e: any, selectedEnviornment: any) => {
        this.EditEnviornmentRef.current.toggle(selectedEnviornment);

    };
    onClickDeleteAccount = (e: any, selectedEnviornment: any) => {
        console.log("Loading catalog failed. Error: ", selectedEnviornment.id);
        fetch(config.DETELE_ENVIRONMENT + selectedEnviornment.id, { method: 'DELETE' })
            .then(() => this.setState({ status: 'Delete successful' }));

    };

    onClickAddAccount = (e: any, selectedEnviornment: any) => {
        this.AddAccountRef.current.toggle(selectedEnviornment);
    };

    displayAWSAccountList () {
        const { displaygetEnvironmentData } = this.state;
        let retData = [];
        for (let i = 0; i < displaygetEnvironmentData.length; i++) {
            let row = displaygetEnvironmentData[i];
            if(row.cloudType.toLowerCase() === "AWS".toLowerCase()){
                console.log("AWS data : ", row);
                retData.push(
                    <tr>
                        <td>
                            <Link to={`${config.basePath}/amazonservices?assetId=${row.id}&orgId=${row.organization ? row.organization.id : null}`}>
                                AWS ({row.tenantId})
                            </Link>
                        </td>
                        <td>{row.organization && row.organization.name}</td>
                        <td>{row.organizationalUnit && row.organizationalUnit.name}</td> 
                        <td>N/A</td>
                        <td>
                            <div className={row.status === 'ACTIVE' ? "status enable" : "status disable"}></div>
                        </td>
                        <td>
                            <div className="d-block text-center">
                                <button className="asset-white-button min-width-inherit m-r-0">
                                    <Rbac parentName={config.PARENT_NAME} childName="library-index-addfolderbtn">
                                        <CreateButtonInput detail={row}/>    
                                    </Rbac>                                  
                                </button>
                            </div> 
                        </td> 
                    </tr>
                );
                
            }
      
        }
        
        return retData;
    }

    displayAzureTableData() {
        const { displaygetEnvironmentData } = this.state;
        let retData = [];
        for (let i = 0; i < displaygetEnvironmentData.length; i++) {
            let row = displaygetEnvironmentData[i];
            if(row.cloudType.toLowerCase() === "AZURE".toLowerCase()) {
                retData.push(
                    console.log("Loading azure data : ", row),
                    <tr>
                        <td>
                            {/* <Link to={`${config.basePath}/amazonservices?assetId=${row.id}&orgId=${row.organization ? row.organization.id : null}`}> */}
                                AZURE ({row.tenantId})
                            {/* </Link> */}
                        </td>
                        <td>{row.organization && row.organization.name}</td>
                        <td>{row.organizationalUnit && row.organizationalUnit.name}</td> 
                        <td>N/A</td>
                        <td>
                            <div className={row.status ? "status enable" : "status disable"}></div>
                        </td>
                        <td>
                            <div className="d-block text-center">
                                <button className="asset-white-button min-width-inherit m-r-0">
                                    <Rbac parentName={config.PARENT_NAME} childName="library-index-addfolderbtn">
                                        <CreateButtonInput detail={row}/>    
                                    </Rbac>                                  
                                </button>
                            </div> 
                        </td> 
                    </tr>
                );
                
            }
        }
        
        return retData;
    }

    onClickAddfolder = (link: any) => {
        this.AddfolderRef.current.setLink(link);
        this.AddfolderRef.current.toggle();
    };

    _displayEnvironmentBox() {

        const EnvironmentBox = this.state.displaygetEnvironmentData.map((val: any, key: any) => {
            return (
                <>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="services-box">
                            <div className="heading">
                                {(() => {
                                    if (val.type == "AWS") {
                                        return (
                                            <span><img src={images.awsLogo} alt="" /></span>
                                        )
                                    } else {
                                        if (val.type == "AZURE") {
                                            return (
                                                <span><img src={images.microsoftAzureLogo} alt="" /></span>
                                            )
                                        } else {
                                            if (val.type == "Synectiks") {
                                                return (
                                                    <span><img src={images.KubernetesLogo} alt="" /></span>
                                                )
                                            } else {
                                                if (val.type == "GCP") {
                                                    return (
                                                        <span><img src={images.gcpLogo} alt="" /></span>
                                                    )
                                                }
                                            }
                                        }
                                    }
                                })()}


                                {/* <h3>
                                    <Link to={`${config.basePath}/amazonservices`}>
                                        {val.name}
                                    </Link>
                                    <a style={{ float: 'right', marginRight: '-15px' }} onClick={e => this.onClickEditAccount(e, val)} >
                                        <i className="fa fa-edit"></i>
                                    </a>
                                    <a style={{ float: 'right', marginRight: '-39px' }} onClick={e => this.onClickDeleteAccount(e, val)} >
                                        <i className="fa fa-trash"></i>
                                    </a>
                                </h3> */}
                            </div>
                            <div className="table-box">
                                <table className="table">
                                    {/* <a style={{ float: 'left', marginRight: '9px', marginLeft: "-22px", fontSize: "14px" }} onClick={e => this.onClickInputAccount(e, val)}>
                                        <i>Add Input</i>
                                    </a> */}
                                    <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }} onClick={e => this.onClickAddAccount(e, val)} >
                                        <i>Add Account</i>
                                    </a>

                                    <tr>
                                        <td>Accounts</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <td>Assets</td>
                                        <td>150</td>
                                    </tr>
                                    <tr>
                                        <td>Log Monitored</td>
                                        <td>100 </td>
                                    </tr>
                                    <tr>
                                        <td>KPI Monitored</td>
                                        <td>18</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                </>
            );

        });
        return EnvironmentBox;
    }

    render() {
        const state = this.state;
        const { displaygetEnvironmentData, showTagFilter, showRecentFilter, showAddNewFilter, aws_table_data } = this.state;
        console.log("gdgdsd",displaygetEnvironmentData);
        return (

            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
                <div className="environments-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="float-right common-right-btn ">
                                    <Link to={`${config.basePath}/`} className="asset-white-button min-width-inherit">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
                                    {/* <Rbac parentName={config.PARENT_NAME} childName="library-index-addfolderbtn">
                                        <a href="#" className="blue-button m-r-5 add-folder" style={{ marginLeft: '207PX' }} onClick={() => this.onClickAddfolder("")}>Add Environment</a>
                                    </Rbac> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 environments-services-container">
                        <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="services-box">
                            <div className="heading">
                                <span><img src={images.awsLogo} alt="" /></span>
                                <h3>
                                    {/* <Link to={`${config.basePath}/amazonservices`}> */}
                                        AWS
                                    {/* </Link> */}
                                    {/* <a style={{ float: 'right', marginRight: '-15px' }} onClick={e => this.onClickEditAccount(e, 'AWS')} >
                                        <i className="fa fa-edit"></i>
                                    </a>
                                    <a style={{ float: 'right', marginRight: '-39px' }} onClick={e => this.onClickDeleteAccount(e, displaygetEnvironmentData)} >
                                        <i className="fa fa-trash"></i>
                                    </a> */}
                                </h3>
                            </div>
                            <div className="table-box">
                                <table className="table">
                                    {/* <a style={{ float: 'left', marginRight: '9px', marginLeft: "-22px", fontSize: "14px" }}>
                                        <i>Add Input</i>
                                    </a> */}
                                    {/* <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }} onClick={e => this.onClickAddAccount(e, 'AWS')} >
                                        <i>Add Account</i>
                                       
                                    </a> */}
                                    <tr>
                                        <td>Accounts</td>
                                        <td>{this.displayAWSAccountList().length}</td>
                                    </tr>
                                    <tr>
                                        <td>Assets</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Alerts</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Total Billing</td>
                                        <td>0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="services-box">
                            <div className="heading">
                               <span><img src={images.microsoftAzureLogo} alt="" /></span>
                                <h3>
                                    {/* <Link to={`${config.basePath}/amazonservices`}> */}
                                        Azure
                                    {/* </Link> */}
                                    {/* <a style={{ float: 'right', marginRight: '-15px' }} onClick={e => this.onClickEditAccount(e, displaygetEnvironmentData)} >
                                        <i className="fa fa-edit"></i>
                                    </a>
                                    <a style={{ float: 'right', marginRight: '-39px' }} onClick={e => this.onClickDeleteAccount(e, displaygetEnvironmentData)} >
                                        <i className="fa fa-trash"></i>
                                    </a> */}
                                </h3>
                            </div>
                            <div className="table-box">
                                <table className="table">
                                    {/* <a style={{ float: 'left', marginRight: '9px', marginLeft: "-22px", fontSize: "14px" }} onClick={e => this.onClickInputAccount(e, displaygetEnvironmentData)}>
                                        <i>Add Input</i>
                                    </a> */}
                                    {/* <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }} onClick={e => this.onClickAddAccount(e, "Azure")} >
                                        <i>Add Account</i>
                                    </a> */}
                                    <tr>
                                        <td>Accounts</td>
                                        <td>{this.displayAzureTableData().length}</td>
                                    </tr>
                                    <tr>
                                        <td>Assets</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Alerts</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Total Billing</td>
                                        <td>0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="services-box">
                            <div className="heading">
                              <span><img src={images.gcpLogo} alt="" /></span>
                                <h3>
                                    {/* <Link to={`${config.basePath}/amazonservices`}> */}
                                        CGP
                                    {/* </Link> */}
                                    {/* <a style={{ float: 'right', marginRight: '-15px' }} onClick={e => this.onClickEditAccount(e, displaygetEnvironmentData)} >
                                        <i className="fa fa-edit"></i>
                                    </a>
                                    <a style={{ float: 'right', marginRight: '-39px' }} onClick={e => this.onClickDeleteAccount(e, displaygetEnvironmentData)} >
                                        <i className="fa fa-trash"></i>
                                    </a> */}
                                </h3>
                            </div>
                            <div className="table-box">
                                <table className="table">
                                    {/* <a style={{ float: 'left', marginRight: '9px', marginLeft: "-22px", fontSize: "14px" }} onClick={e => this.onClickInputAccount(e, displaygetEnvironmentData)}>
                                        <i>Add Input</i>
                                    </a> */}
                                    {/* <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }} onClick={e => this.onClickAddAccount(e,"CGP")} >
                                        <i>Add Account</i>
                                    </a> */}

                                    <tr>
                                        <td>Accounts</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Assets</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Alerts</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Total Billing</td>
                                        <td>0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="services-box">
                            <div className="heading">
                                <span><img src={images.KubernetesLogo} alt="" /></span>
                                <h3>
                                    {/* <Link to={`${config.basePath}/amazonservices`}> */}
                                        Kubernates
                                    {/* </Link> */}
                                    {/* <a style={{ float: 'right', marginRight: '-15px' }} onClick={e => this.onClickEditAccount(e, displaygetEnvironmentData)} >
                                        <i className="fa fa-edit">dsffff</i>
                                    </a>
                                    <a style={{ float: 'right', marginRight: '-39px' }} onClick={e => this.onClickDeleteAccount(e, displaygetEnvironmentData)} >
                                        <i className="fa fa-trash">dsf</i>
                                    </a> */}
                                </h3>
                            </div>
                            <div className="table-box">
                                <table className="table">
                                    {/* <a style={{ float: 'left', marginRight: '9px', marginLeft: "-22px", fontSize: "14px" }} onClick={e => this.onClickInputAccount(e, displaygetEnvironmentData)}>
                                        <i>Add Input</i>
                                    </a> */}
                                    {/* <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }} onClick={e => this.onClickAddAccount(e, "Synectiks")} >
                                        <i>Add Account</i>
                                    </a> */}

                                    <tr>
                                        <td>Accounts</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Assets</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Alerts</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Total Billing</td>
                                        <td>0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                            {/* {this._displayEnvironmentBox()} */}
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 environments-table-container">
                        <SelectCloudFilter />
                        <div className="recent-fliters-container">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="fliter">
                                                <div className="fliter-toggel" onClick={() => this.setState({ showRecentFilter: !showRecentFilter })}>
                                                    <i className="fa fa-clock-o"></i>
                                                    <span>Recent</span>
                                                </div>
                                                <div className={showRecentFilter === true ? "fliter-collapse active" : "fliter-collapse"}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <span><img src={images.awsLogo} alt="" /></span>
                                                                <p>AWS (657907747545)</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span><img src={images.awsLogo} alt="" /></span>
                                                                <p>AWS (655668745458)</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="fliter">
                                                <div className="fliter-toggel" onClick={() => this.setState({ showAddNewFilter: !showAddNewFilter })}>
                                                    <i className="fa fa-plus"></i>
                                                    <span>Add New Environment</span>
                                                </div>
                                                <div className={showAddNewFilter === true ? "fliter-collapse active" : "fliter-collapse"}>
                                                    <ul>
                                                        <li>
                                                            <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }}  >
                                                                <i>
                                                                    <Link to={`${config.basePath}/accountsetup`}><span><img src={images.awsLogo} alt="" /></span> AWS Environment 
                                                                    </Link> 
                                                                </i>                                     
                                                            </a>
                                                        </li>
                                                        
                                                        <li>
                                                            <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }}  >
                                                                <i>
                                                                    <span><img src={images.microsoftAzureLogo} alt="" /></span> Azure Environment
                                                                </i>
                                                             </a>
                                          
                                                        </li>
                                                        <li>
                                                            <a style={{ float: 'left', marginRight: '-54px', fontSize: "14px" }}  >
                                                                <i>
                                                                    <span><img src={images.gcpLogo} alt="" /></span> GCP Environment
                                                                </i>
                                                            </a>    
                                                        </li>
                                                        <li>
                                                            <a style={{ float: 'left',  fontSize: "14px" }}  >
                                                                <i><span><img src={images.KubernetesLogo} alt="" /></span> Kubernetes </i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="fliter">
                                                <div className="fliter-toggel">
                                                    <i className="fa fa-sign-out"></i>
                                                    <span>Export</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group search-control m-b-0">
                                        <button className="btn btn-search">
                                            <i className="fa fa-search"></i>
                                        </button>
                                        <input type="text" className="input-group-text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="environments-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th><span><img src={images.awsLogo} alt="" /></span> AWS</th>
                                        <th>Organisation</th>
                                        <th>Organisational Unit</th>
                                        <th>Online Instance</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.displayAWSAccountList()}
                                </tbody>
                            </table>
                            <table className="table">
                                <thead>
                                    <tr>
                                      <th colSpan={5}><span><img src={images.microsoftAzureLogo} alt="" /></span> Azure Cloud</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                {this. displayAzureTableData()}
                                </tbody>
                            
                            </table>
                        </div>
                    </div>
                </div>
                <AddAccount refreshEnvironment={this. refreshEnvironment}displaygetEnvironmentData ={state.displaygetEnvironmentData } ref={this.AddAccountRef} />
              
                {/* <AddEnviornment refreshEnvironment={this.refreshEnvironment} ref={this.AddfolderRef} /> */}
                {/* <EditEnviornment refreshEnvironment={this.refreshEnvironment} ref={this.EditEnviornmentRef} /> */}

            </div>
        );
    }
};