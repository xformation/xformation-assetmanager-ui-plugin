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

    render() {
        const { activeTab } = this.state;
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
                                    <li className={activeTab === 0 ? 'active' : ''} onClick={e => this.setActiveTab(0)}>
                                        <a href="#">VPC1 - EC2 - Node 2 <i className="fa fa-times" aria-hidden="true"></i></a>
                                    </li>
                                    <li className={activeTab === 1 ? 'active' : ''} onClick={e => this.setActiveTab(1)}>
                                        <a href="#">VPC1 - EC2 - Node 5 <i className="fa fa-times" aria-hidden="true"></i></a>
                                    </li>
                                    <li className={activeTab === 2 ? 'active' : ''} onClick={e => this.setActiveTab(2)}>
                                        <a href="#">VPC1 - EC2 - Node 4 <i className="fa fa-times" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="webservice-container">
                                {activeTab === 0 && <Node2 />}
                                {activeTab === 1 && <Node5 />}
                                {activeTab === 2 && <Node4 />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};