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
                                    <li className="active">
                                        <a href="#">
                                            VPC1 - EC2 - Node 2
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            VPC3 - EC2 - Node 5
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            VPC3 - EC2 - Node 2
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="webservice-container">
                                <div className="heading">
                                    <h3>
                                        <span><img src={images.awsLogo} alt="" /></span>
                                        Amazon Web Services
                                    </h3>
                                    <div className="breadcrumbs">
                                        <ul>
                                            <li>Account Number - <span>AWS-(657907747545)</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="account-box">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-lg-7 col-md-7 col-sm-12">
                                            <div className="breadcrumbs">
                                                <ul>
                                                    <li>Account Number - <span>AWS-(657907747545)</span></li>
                                                    <li><i className="fa fa-angle-right" aria-hidden="true"></i>VPC 1</li>
                                                    <li><i className="fa fa-angle-right" aria-hidden="true"></i>EC2</li>
                                                    <li><i className="fa fa-angle-right" aria-hidden="true"></i>Node 2</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                            <div className="search-box form-group">
                                                <input type="text" className="control-form" placeholder="Search" value="" />
                                                <button><i className="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="storage-section">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                            <div className="network-boxs">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                            Storage
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                            Network
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                            Configuration
                                                        </a>
                                                    </li>
                                                    <li className="last">
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                                                            External Storage
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-12">
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