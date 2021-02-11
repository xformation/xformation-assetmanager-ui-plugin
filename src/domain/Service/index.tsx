import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';

export class Service extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            codeEditorValue: ""
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
                                    <Link to={`${config.basePath}/`} className="asset-white-button min-width-inherit">
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
                                <div className="icon float-right"><i className="fa fa-plus" aria-hidden="true"></i></div>
                            </div>
                            <div className="service-content">
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
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-b-0">
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
                                        <div className="tbody">
                                            <div className="tbody-inner">
                                                <div className="tbody-td">
                                                    <div className="caret-down"></div>
                                                    VPC 1
                                                </div>
                                                <div className="tbody-td"></div>
                                                <div className="tbody-td">N/A</div>
                                                <div className="tbody-td">
                                                    <div className="status-icon"></div>
                                                </div>
                                                <div className="tbody-td">
                                                    <div className="d-flex">
                                                        <button className="btn btn-link" id="PopoverFocus">
                                                            <i className="fa fa-ellipsis-h"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collapse" style={{'display' : 'block'}}>
                                                <div className="tbody">
                                                    <div className="tbody-td first">
                                                        <div className="caret-down"></div>
                                                        EC2
                                                    </div>
                                                    <div className="tbody-td"></div>
                                                    <div className="tbody-td">N/A</div>
                                                    <div className="tbody-td">
                                                        <div className="status-icon"></div>
                                                    </div>
                                                    <div className="tbody-td">
                                                        <div className="d-flex">
                                                            <button className="btn btn-link" id="PopoverFocus">
                                                                <i className="fa fa-ellipsis-h"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="load-balancer">
                                                        <div className="tbody">
                                                            <div className="tbody-td first">
                                                            <div className="caret-right"></div>
                                                                Node 1</div>
                                                            <div className="tbody-td"></div>
                                                            <div className="tbody-td">N/A</div>
                                                            <div className="tbody-td">
                                                                <div className="status-icon"></div>
                                                            </div>
                                                            <div className="tbody-td">
                                                                <div className="d-flex">
                                                                    <button className="btn btn-link" id="PopoverFocus">
                                                                        <i className="fa fa-ellipsis-h"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tbody">
                                                            <div className="tbody-inner">
                                                                <div className="tbody-td first">
                                                                    <div className="caret-right"></div>
                                                                    Node 2</div>
                                                                <div className="tbody-td"></div>
                                                                <div className="tbody-td">N/A</div>
                                                                <div className="tbody-td">
                                                                    <div className="status-icon"></div>
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
                                                        <div className="tbody">
                                                            <div className="tbody-td first">
                                                            <div className="caret-right"></div>
                                                                Node 3</div>
                                                            <div className="tbody-td"></div>
                                                            <div className="tbody-td">N/A</div>
                                                            <div className="tbody-td">
                                                                <div className="status-icon"></div>
                                                            </div>
                                                            <div className="tbody-td">
                                                                <div className="d-flex">
                                                                    <button className="btn btn-link" id="PopoverFocus">
                                                                        <i className="fa fa-ellipsis-h"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tbody">
                                                            <div className="tbody-inner">
                                                                <div className="tbody-td first">
                                                                    <div className="caret-right"></div>
                                                                    Node 4</div>
                                                                <div className="tbody-td"></div>
                                                                <div className="tbody-td">N/A</div>
                                                                <div className="tbody-td">
                                                                    <div className="status-icon"></div>
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
                                                        <div className="tbody">
                                                            <div className="tbody-td first">
                                                            <div className="caret-right"></div>
                                                                Node 5</div>
                                                            <div className="tbody-td"></div>
                                                            <div className="tbody-td">N/A</div>
                                                            <div className="tbody-td">
                                                                <div className="status-icon"></div>
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
                                                </div>
                                                <div className="tbody">
                                                    <div className="tbody-td first">
                                                    <div className="caret-right"></div>
                                                        RDS</div>
                                                    <div className="tbody-td"></div>
                                                    <div className="tbody-td">N/A</div>
                                                    <div className="tbody-td">
                                                        <div className="status-icon"></div>
                                                    </div>
                                                    <div className="tbody-td">
                                                        <div className="d-flex">
                                                            <button className="btn btn-link" id="PopoverFocus">
                                                                <i className="fa fa-ellipsis-h"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tbody">
                                                    <div className="tbody-td first">
                                                        <div className="caret-right"></div>
                                                        Load Balancer
                                                    </div>
                                                    <div className="tbody-td"></div>
                                                    <div className="tbody-td">N/A</div>
                                                    <div className="tbody-td">
                                                        <div className="status-icon"></div>
                                                    </div>
                                                    <div className="tbody-td">
                                                        <div className="d-flex">
                                                            <button className="btn btn-link" id="PopoverFocus">
                                                                <i className="fa fa-ellipsis-h"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tbody">
                                                    <div className="tbody-td first">
                                                    <div className="caret-right"></div>
                                                    Firewall</div>
                                                    <div className="tbody-td"></div>
                                                    <div className="tbody-td">N/A</div>
                                                    <div className="tbody-td">
                                                        <div className="status-icon"></div>
                                                    </div>
                                                    <div className="tbody-td">
                                                        <div className="d-flex">
                                                            <button className="btn btn-link" id="PopoverFocus">
                                                                <i className="fa fa-ellipsis-h"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tbody">
                                                    <div className="tbody-td first">
                                                        <div className="caret-right"></div>
                                                        CDN
                                                    </div>
                                                    <div className="tbody-td"></div>
                                                    <div className="tbody-td">N/A</div>
                                                    <div className="tbody-td">
                                                        <div className="status-icon"></div>
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
                                        </div>
                                        <div className="tbody">
                                            <div className="tbody-inner">
                                                <div className="tbody-td">
                                                    <div className="caret-right"></div>
                                                    Node
                                                </div>
                                                <div className="tbody-td"></div>
                                                <div className="tbody-td">N/A</div>
                                                <div className="tbody-td">
                                                    <div className="status-icon"></div>
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
                                        <div className="tbody">
                                            <div className="tbody-inner">
                                                <div className="tbody-td">
                                                    <div className="caret-right"></div>
                                                    VPC 2
                                                </div>
                                                <div className="tbody-td"></div>
                                                <div className="tbody-td">N/A</div>
                                                <div className="tbody-td">
                                                    <div className="status-icon"></div>
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
                                        <div className="tbody">
                                            <div className="tbody-inner">
                                                <div className="tbody-td">
                                                    <div className="caret-right"></div>
                                                    RDS
                                                </div>
                                                <div className="tbody-td"></div>
                                                <div className="tbody-td">N/A</div>
                                                <div className="tbody-td">
                                                    <div className="status-icon"></div>
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
                                        <div className="tbody">
                                            <div className="tbody-inner">
                                                <div className="tbody-td">
                                                    <div className="caret-right"></div>
                                                    Database
                                                </div>
                                                <div className="tbody-td"></div>
                                                <div className="tbody-td">N/A</div>
                                                <div className="tbody-td">
                                                    <div className="status-icon"></div>
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
                                        <div className="tbody">
                                            <div className="tbody-inner">
                                                <div className="tbody-td">
                                                    <div className="caret-right"></div>
                                                    VPC 3
                                                </div>
                                                <div className="tbody-td"></div>
                                                <div className="tbody-td">N/A</div>
                                                <div className="tbody-td">
                                                    <div className="status-icon"></div>
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