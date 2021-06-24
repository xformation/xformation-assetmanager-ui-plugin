import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { Node2 } from './Node2';
import { Node4 } from './Node4';
import { Node5 } from './Node5';

export class StorageDetails extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0,
            storageData: [
                {
                    nodeTitle: 'VPC1 - EC2 - Node 2',
                    nodeDetail: {
                        title: 'Amazon Web Services',
                        acNo: 'AWS-(657907747545)',
                        pagelink: [
                            {
                                name: 'VPC 1'
                            },
                            {
                                name: 'EC2'
                            },
                            {
                                name: 'VPC 1'
                            }
                        ],
                        steps: [
                            {
                                name: "Entity",
                                component: <div>Entity</div>,
                                nodeTree: [
                                    { name: 'storage' },
                                    { name: 'Network' },
                                    { name: 'Configuration' },
                                    { name: 'External Storage' },
                                ]
                            },
                            {
                                name: "Performance",
                                component: <div>Performance</div>
                            },
                            {
                                name: "Availability",
                                component: <div>Availability</div>
                            },
                            {
                                name: "Reliability",
                                component: <div>Reliability</div>
                            },
                            {
                                name: "End Usage",
                                component: <div>End Usage</div>
                            },
                            {
                                name: "Security",
                                component: <div>Security</div>
                            },
                            {
                                name: "Compliance",
                                component: <div>Compliance</div>
                            },
                            {
                                name: "Alerts",
                                component: <div>Alerts</div>
                            }
                        ]
                    }
                },
                {
                    nodeTitle: 'VPC1 - EC2 - Node 5',
                    nodeDetail: {
                        title: 'Amazon Web Services',
                        acNo: 'AWS-(657907747545)',
                        pagelink: [
                            {
                                name: 'VPC 1'
                            },
                            {
                                name: 'EC2'
                            },
                            {
                                name: 'VPC 1'
                            }
                        ]
                    }
                },
                {
                    nodeTitle: 'VPC1 - EC2 - Node 4',
                    nodeDetail: {
                        title: 'Amazon Web Services',
                        acNo: 'AWS-(657907747545)',
                        pagelink: [
                            {
                                name: 'VPC 1'
                            },
                            {
                                name: 'EC2'
                            },
                            {
                                name: 'VPC 1'
                            }
                        ]
                    }
                }
            ]
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
    setActiveTab = (activeTab: any) => {
        this.setState({
            activeTab,
        });
    };

    displayTabs = () => {
        const { activeTab, storageData } = this.state;
        let retData = [];
        for (let i = 0; i < storageData.length; i++) {
            let node = storageData[i];
            retData.push(
                <li className={activeTab === i ? 'active' : ''} onClick={e => this.setActiveTab(i)}>
                    <a>{node.nodeTitle}<i className="fa fa-times" aria-hidden="true"></i></a>
                </li>
            );
        }
        return retData;
    }

    render() {
        const { activeTab, storageData } = this.state;
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
                    <div className="common-container">
                        <div className="service-account-container">
                            <div className="account-tabs">
                                <ul>
                                    {this.displayTabs()}
                                    {/* <li className={activeTab === 0 ? 'active' : ''} onClick={e => this.setActiveTab(0)}>
                                        <a href="#">VPC1 - EC2 - Node 2 <i className="fa fa-times" aria-hidden="true"></i></a>
                                    </li>
                                    <li className={activeTab === 1 ? 'active' : ''} onClick={e => this.setActiveTab(1)}>
                                        <a href="#">VPC1 - EC2 - Node 5 <i className="fa fa-times" aria-hidden="true"></i></a>
                                    </li>
                                    <li className={activeTab === 2 ? 'active' : ''} onClick={e => this.setActiveTab(2)}>
                                        <a href="#">VPC1 - EC2 - Node 4 <i className="fa fa-times" aria-hidden="true"></i></a>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="webservice-container">
                                <Node2 data={storageData[activeTab]} />
                                {/* {activeTab === 0 && <Node2 />}
                                {activeTab === 1 && <Node5 />}
                                {activeTab === 2 && <Node4 />} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};