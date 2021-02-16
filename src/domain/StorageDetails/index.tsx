import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';

export class StorageDetails extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            
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

    render() {
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
                <div className="service-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12">
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
                                    <li><a href="#" className="active">VPC1 - EC2 - Node 2 <span><i className="fa fa-times" aria-hidden="true"></i></span></a></li>
                                    <li><a href="#">VPC3 - EC2 - Node 5 <span><i className="fa fa-times" aria-hidden="true"></i></span></a></li>
                                    <li><a href="#">VPC3 - EC2 - Node 2 <span><i className="fa fa-times" aria-hidden="true"></i></span></a></li>
                                </ul>
                            </div>
                            <div className="webservice-container">
                                <div className="heading">
                                    <span><img src={images.awsLogo} alt="" /></span>
                                    <h3>Amazon Web Services</h3>
                                    <p>Account Number -</p>
                                    <div className="breadcrumbs">AWS-(657907747545)</div>
                                </div>
                                <div className="account-box">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-lg-7 col-md-7 col-sm-12">
                                            <div className="account-content">
                                                <p>Account Number - </p>
                                                <div className="breadcrumbs">AWS-(657907747545)</div>
                                                <ul>
                                                    <li><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>VPC 1</li>
                                                    <li><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>EC2</li>
                                                    <li><span><i className="fa fa-angle-right" aria-hidden="true"></i></span>Node 2</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                            <div className="search-box form-group"><input type="text" className="control-form" placeholder="Search" value="" /><button><i className="fa fa-search"></i></button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="storage-section">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="network-boxs">
                                                <div className="configuration-box"><span><i className="fa fa-caret-right" aria-hidden="true"></i></span>Storage</div>
                                                <div className="external-box"><span><i className="fa fa-caret-right" aria-hidden="true"></i></span>Network</div>
                                                <div className="configuration-box"><span><i className="fa fa-caret-right" aria-hidden="true"></i></span>Configuration</div>
                                                <div className="external-box last"><span><i className="fa fa-caret-right" aria-hidden="true"></i></span>External Storage</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-12">
                                            <div className="storage-details text-center">
                                                <h4>Storage details will be displayed here</h4>
                                            </div>
                                        </div>
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