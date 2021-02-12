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
                    subdata: [
                        { name: 'IT Department', value: 'itdepartment' },
                        { name: 'Network Department', value: 'networkdepartment' },
                        { name: 'Development', value: 'development' },
                        { name: 'Testing', value: 'testing' },
                    ],
                },
                {
                    name: 'Status',
                    value: 'status',
                    subdata: [
                        { name: 'Enable', value: 'enable' },
                        { name: 'Disable', value: 'disable' },
                    ],
                },
                {
                    name: 'No of Assets',
                    value: 'noOFssets',
                    subdata: [],
                },
                {
                    name: 'Platform',
                    value: 'platform',
                    subdata: [],
                }, {
                    name: 'Logs',
                    value: 'logs',
                    subdata: [],
                }, {
                    name: 'Performance & Availability',
                    value: 'availabiity',
                    subdata: []
                }
            ],
            displayJsonData: [
                {
                    name: 'OU',
                    value: 'ou',
                    subdata: [
                        { name: 'IT Department', value: 'itdepartment' },
                        { name: 'Network Department', value: 'networkdepartment' },
                        { name: 'Development', value: 'development' },
                        { name: 'Testing', value: 'testing' },
                    ],
                },
                {
                    name: 'Status',
                    value: 'status',
                    subdata: [
                        { name: 'Enable', value: 'enable' },
                        { name: 'Disable', value: 'disable' },
                    ],
                },
                {
                    name: 'No of Assets',
                    value: 'noOFssets',
                    subdata: [],
                },
                {
                    name: 'Platform',
                    value: 'platform',
                    subdata: [],
                }, {
                    name: 'Logs',
                    value: 'logs',
                    subdata: [],
                }, {
                    name: 'Performance & Availability',
                    value: 'availabiity',
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
    }

    displaySelectedTags = () => {
        const { selectedTeg } = this.state;
        let retData = [];
        if (selectedTeg.length > 0) {
            for (let i = 0; i < selectedTeg.length; i++) {
                retData.push(
                    <div className="fliter-selected">{selectedTeg[i]} <i className="fa fa-times" onClick={() => this.removeSelectedTag(selectedTeg[i])}></i></div>
                );
            }
        } else {
            retData.push(
                <p>Select and add Filters</p>
            );
        }
        return retData;
    }

    removeSelectedTag = (value: any) => {
        const { selectedTeg } = this.state;
        selectedTeg.splice(selectedTeg.indexOf(value), 1);
        this.setState({
            selectedTeg,
        });
    }

    displayTagList = () => {
        const { displayJsonData } = this.state;
        let retData = [];
        for (let i = 0; i < displayJsonData.length; i++) {
            retData.push(
                <div className="form-check" onClick={() => this.changeHandleState(i, displayJsonData[i].value)}>
                    <input type="checkbox" className="checkbox" />
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
                selectedTeg.push(value);
                if (optionJsonData[i].subdata.length > 0) {
                    displayJsonData = [];
                    for (let k = 0; k < optionJsonData[i].subdata.length; k++) {
                        displayJsonData.push(optionJsonData[i].subdata[k]);
                    }
                    this.setState({
                        displayJsonData,
                    })
                } else {
                    this.setState({
                        displayJsonData: optionJsonData,
                    });
                }
            } else {
                if (optionJsonData[i].subdata.length > 0) {
                    displayJsonData = [];
                    for (let j = 0; j < optionJsonData[i].subdata.length; j++) {
                        if (optionJsonData[i].subdata[j].value === value) {
                            selectedTeg.push(value);
                            this.setState({
                                displayJsonData: optionJsonData,
                            });
                        }
                    }
                }
            }
        }
        this.setState({
            selectedTeg
        })
    }

    render() {
        const { showTagFilter, showRecentFilter, showAddNewFilter } = this.state;
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
                            <div className="select-fliters" onClick={() => this.setState({ showTagFilter: !showTagFilter })}>
                                {this.displaySelectedTags()}
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
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={5}><span><img src={images.microsoftAzureLogo} alt="" /></span> Azure Cloud</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">AWS (657907747545)</a>
                                        </td>
                                        <td>Synectiks</td>
                                        <td>N/A</td>
                                        <td>
                                            <div className="status"></div>
                                        </td>
                                        <td>
                                            <div className="d-block text-center">
                                                <button className="asset-white-button min-width-inherit m-r-0">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};