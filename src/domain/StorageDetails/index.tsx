import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { Node } from './Node';

export class StorageDetails extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0,
            storageData: []
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

    componentDidMount() {
        const name = this.getParameterByName("name", window.location.href);
        const accountId = this.getParameterByName("accountId", window.location.href);
        const tenantId = this.getParameterByName("tenantId", window.location.href);
        if (name) {
            const { storageData } = this.state;
            storageData.push({
                nodeTitle: name,
                accountId: accountId,
                tenantId: tenantId
            });
            this.setState({
                storageData
            });
        } else {
            
        }
    }

    getParameterByName = (name: any, url: any) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
        console.log("storageData[activeTab] : ",storageData[activeTab]);
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
                                </ul>
                            </div>
                            <div className="webservice-container">
                                <Node data={storageData[activeTab]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};