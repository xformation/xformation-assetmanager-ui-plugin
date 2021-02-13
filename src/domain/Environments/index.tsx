import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';

export class Environments extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
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
            aws_table_data: [
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
            ],
            azure_table_data: [
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
                { title: 'AWS (657907747545)', unit: 'Synectiks', instance: 'N/A', status: true },
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

    displayTableData = (table_data: any) => {
        let retData = [];
        for (let i = 0; i < table_data.length; i++) {
            let row = table_data[i];
            retData.push(
                <tr>
                    <td>
                        <a href="#">{row.title}</a>
                    </td>
                    <td>{row.unit}</td>
                    <td>{row.instance}</td>
                    <td>
                        <div className={row.status ? "status enable" : "status disable"}></div>
                    </td>
                    <td>
                        <div className="d-block text-center">
                            <button className="asset-white-button min-width-inherit m-r-0">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            );
        }
        return retData;
    }

    render() {
        const { showTagFilter, showRecentFilter, showAddNewFilter, aws_table_data, azure_table_data } = this.state;
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
                <div className="environments-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`${config.basePath}/`} className="asset-white-button min-width-inherit">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
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
                                            <Link to={`${config.basePath}/amazonservices`}>
                                                Amazon Web Services
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="table-box">
                                        <table className="table">
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
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>KPI Monitored</td>
                                                <td>18</td>
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
                                            <Link to={`${config.basePath}/#`}>
                                                Azure Cloud
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="table-box">
                                        <table className="table">
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
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>KPI Monitored</td>
                                                <td>18</td>
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
                                            <Link to={`${config.basePath}/#`}>
                                                Google Cloud Platform
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="table-box">
                                        <table className="table">
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
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>KPI Monitored</td>
                                                <td>18</td>
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
                                            <Link to={`${config.basePath}/kubernetes`}>
                                                Kubernetes
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="table-box">
                                        <table className="table">
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
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>KPI Monitored</td>
                                                <td>18</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 environments-table-container">
                        <div className="fliters-container">
                            <div className="select-fliters">
                                {this.displaySelectedTags()}
                                <div className="fliter-toggel" onClick={() => this.setState({ showTagFilter: !showTagFilter })}></div>
                                <i className="fa fa-angle-down"></i>
                            </div>
                            <div className={showTagFilter === true ? "fliters-collapse active" : "fliters-collapse"}>
                                <div className="form-group search-control">
                                    <button className="btn btn-search">
                                        <i className="fa fa-search"></i>
                                    </button>
                                    <input type="text" className="input-group-text" placeholder="Search" />
                                    <button className="btn btn-clear">
                                        <i className="fa fa-times"></i>
                                        Clear
                                    </button>
                                </div>
                                <div className="fliters-links">
                                    {this.displayTagList()}
                                </div>
                            </div>
                        </div>
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
                                                    <span>Add New</span>
                                                </div>
                                                <div className={showAddNewFilter === true ? "fliter-collapse active" : "fliter-collapse"}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <span><img src={images.awsLogo} alt="" /></span>
                                                                <p>AWS Environment</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span><img src={images.microsoftAzureLogo} alt="" /></span>
                                                                <p>Azure Subscription</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span><img src={images.gcpLogo} alt="" /></span>
                                                                <p>GCP Project</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span><img src={images.KubernetesLogo} alt="" /></span>
                                                                <p>Kubernetes Cluster</p>
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
                                        <th>Organisational Unit</th>
                                        <th>Online Instance</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.displayTableData(aws_table_data)}
                                </tbody>
                            </table>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={5}><span><img src={images.microsoftAzureLogo} alt="" /></span> Azure Cloud</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.displayTableData(azure_table_data)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};