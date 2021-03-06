import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';
import { Collapse } from 'reactstrap';

export class AmazonServices extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            display_detail: true,
            tableData: [
                {
                    title: 'VPC 1', unit: '', instance: 'N/A',
                    status: true,
                    isOpened: false,
                    subData: [
                        {
                            title: 'EC2', unit: '', instance: 'N/A', status: true, isOpened: false,
                            subData: [
                                { title: 'Node1', unit: '', instance: 'N/A', status: true },
                                { title: 'Node2', unit: '', instance: 'N/A', status: true },
                                { title: 'Node3', unit: '', instance: 'N/A', status: true },
                                { title: 'Node4', unit: '', instance: 'N/A', status: true },
                                { title: 'Node5', unit: '', instance: 'N/A', status: true }
                            ]
                        },
                        { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Load Balancer', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Firewall', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'CDN', unit: '', instance: 'N/A', status: true, isOpened: false }
                    ]
                },
                {
                    title: 'Node', unit: '', instance: 'N/A', status: true, isOpened: false,
                    subData: [
                        {
                            title: 'EC2', unit: '', instance: 'N/A', status: true, isOpened: false,
                            subData: [
                                { title: 'Node1', unit: '', instance: 'N/A', status: true },
                                { title: 'Node2', unit: '', instance: 'N/A', status: true },
                                { title: 'Node3', unit: '', instance: 'N/A', status: true },
                                { title: 'Node4', unit: '', instance: 'N/A', status: true },
                                { title: 'Node5', unit: '', instance: 'N/A', status: true }
                            ]
                        },
                        { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Load Balancer', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Firewall', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'CDN', unit: '', instance: 'N/A', status: true, isOpened: false }
                    ]
                },
                {
                    title: 'VPC 2', unit: '', instance: 'N/A', status: true, isOpened: false,
                    subData: [
                        {
                            title: 'EC2', unit: '', instance: 'N/A', status: true, isOpened: false,
                            subData: [
                                { title: 'Node1', unit: '', instance: 'N/A', status: true },
                                { title: 'Node2', unit: '', instance: 'N/A', status: true },
                                { title: 'Node3', unit: '', instance: 'N/A', status: true },
                                { title: 'Node4', unit: '', instance: 'N/A', status: true },
                                { title: 'Node5', unit: '', instance: 'N/A', status: true }
                            ]
                        },
                        { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Load Balancer', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Firewall', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'CDN', unit: '', instance: 'N/A', status: true, isOpened: false }
                    ]
                },
                { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                { title: 'Database', unit: '', instance: 'N/A', status: true, isOpened: false },
                { title: 'VPC 3', unit: '', instance: 'N/A', status: true, isOpened: false }
            ],
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

    showHideDetail = () => {
        const { display_detail } = this.state;
        this.setState({
            display_detail: !display_detail,
        })
    }

    displayTable = () => {
        const retData = [];
        const { tableData } = this.state;
        const length = tableData.length;
        for (let i = 0; i < length; i++) {
            const folder = tableData[i];
            retData.push(this.renderTree(folder, [i]));
        }
        return retData;
    }

    renderTree = (folder: any, indexArr: any): any => {
        const retData = [];
        const subFolders = folder.subData;
        const subFolderJSX = [];
        if (subFolders != undefined) {
            for (let j = 0; j < subFolders.length; j++) {
                const subFolder = subFolders[j];
                let subIndexArr: any = [];
                subIndexArr = [...indexArr, j];
                subFolderJSX.push(
                    <>
                        {(subFolder.subData == undefined) &&
                            <div className="tbody">
                                <div className="tbody-inner">
                                    <div className="tbody-td first">
                                        <div className="caret-right"></div>
                                        {subFolder.title}
                                    </div>
                                    <div className="tbody-td">{subFolder.unit}</div>
                                    <div className="tbody-td">{subFolder.instance}</div>
                                    <div className="tbody-td">
                                        <div className={subFolder.status ? "status-icon enable" : "status-icon disable"}></div>
                                    </div>
                                    <div className="tbody-td">
                                        <div className="d-flex">
                                            <button className="btn btn-link" id="PopoverFocus">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            subFolder.subData &&
                            this.renderTree(subFolder, subIndexArr)
                        }

                    </>
                );
            }
        }
        retData.push(
            <div className="tbody">
                <div className="tbody-inner">
                    <div className="tbody-td first">
                        {!folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
                        {folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
                        {folder.title}
                    </div>
                    <div className="tbody-td">{folder.unit}</div>
                    <div className="tbody-td">{folder.instance}</div>
                    <div className="tbody-td">
                        <div className={folder.status ? "status-icon enable" : "status-icon disable"}></div>
                    </div>
                    <div className="tbody-td">
                        <div className="d-flex">
                            <button className="btn btn-link" id="PopoverFocus">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <Collapse className="collapse-content" isOpen={folder.isOpened}>
                    {subFolderJSX}
                </Collapse>
            </div>
        );
        return retData;
    }

    onClickOpenSubTreeArr = (indexArr: any) => {
        const { tableData } = this.state;
        const folder = this.findChild(tableData, [...indexArr]);
        folder.isOpened = !folder.isOpened;
        this.setState({
            tableData
        });
    }

    findChild = (folderList: any, indexArr: any): any => {
        const index = indexArr.splice(0, 1)[0];
        if (indexArr.length === 0) {
            return folderList[index];
        } else {
            return this.findChild(folderList[index].subData, indexArr);
        }
    };

    render() {
        const { display_detail } = this.state;
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
                <div className="service-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`${config.basePath}/`} className="asset-white-button min-width-inherit m-r-0">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-b-0">
                        <div className="service-full-container">
                            <div className="heading"><span><img src={images.awsLogo} alt="" /></span><h2>Amazon Web Services</h2>
                                <div className="icon float-right" onClick={this.showHideDetail}><i className={display_detail ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true"></i></div>
                            </div>
                            {display_detail && <div className="service-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="services-added">Organisation Unit</div>
                                            </div>
                                            <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                                                <div className="services-added">Organisation Unit</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                                <div className="services-added">Total Online Instances</div>
                                            </div>
                                            <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                                <div className="services-added">4</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="services-added">Account Number</div>
                                            </div>
                                            <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                                                <div className="services-added"><span>AWS (657907747545)</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                                <div className="services-added">Full Protection Security Group</div>
                                            </div>
                                            <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                                <div className="services-added">0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="services-added">Cloud Guard ID</div>
                                            </div>
                                            <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                                                <div className="services-added">e5b82995-c0fc-729d-a67b-926r81a5963d</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                                <div className="services-added">Read Only Security Group</div>
                                            </div>
                                            <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                                <div className="services-added">66</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="services-added">Added At</div>
                                            </div>
                                            <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                                                <div className="services-added">Feb 01, 2021 21:30</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="urganisational-unit-container">
                            <div className="unit-tabs">
                                <ul>
                                    <li><a href="#" className="active">Discovered Assets</a></li>
                                    <li><a href="#">KPI Monitored</a></li>
                                    <li><a href="#">Log Monitored</a></li>
                                    <li><a href="#">Compliance Policies</a></li>
                                    <li><a href="#">Threat and Security Events</a></li>
                                </ul>
                            </div>
                            <div className="Filters-box">
                                <p>Select and add Filters</p>
                                <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                            </div>
                            <div className="showing-export">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="showing-heading">
                                            Showing results 81 of 81
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                        <div className="export-files">
                                            <span><i className="fa fa-sign-out"></i></span>
                                            <p>Expport</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div className="search-box form-group">
                                            <input type="text" className="control-form" placeholder="Search" value="" /><button><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="organisational-details">
                                <div className="container-inner">
                                    <div className="organisational-data-table">
                                        <div className="thead">
                                            <div className="thead-th organisational-heading"><span><img src={images.awsLogo} alt="" /></span>AWS</div>
                                            <div className="thead-th">Organisational Unit</div>
                                            <div className="thead-th">Online Instance</div>
                                            <div className="thead-th">Status</div>
                                            <div className="thead-th">Action</div>
                                        </div>
                                        {this.displayTable()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};