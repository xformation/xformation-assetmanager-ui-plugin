import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';
import { RestService } from '../_service/RestService';
import * as dateFormat from 'dateformat'
import { Wizard } from './Wizard';
import { DiscoveredAssets } from './DiscoveredAssets';
import { Billing } from './Billing';
import { ThreatAndSecurityEvents } from './ThreatAndSecurityEvents';
import { CompliancePolicies } from './CompliancePolicies';
import { Alerts } from './Alerts';
import { Inputs } from './Inputs';


export class AmazonServices extends React.Component<any, any> {
    breadCrumbs: any;
    dateFormat: any;
    steps: any;
    OrganisationunitRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            display_detail: true,
            displaygetEnvironmentData: null,
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
        this.OrganisationunitRef = React.createRef();
        this.steps = [
            {
                name: "Discovered Assets",
                component: <DiscoveredAssets />
            },
            {
                name: "Billing",
                component: <Billing />
            },
            {
                name: "Threat and Security Events",
                component: <ThreatAndSecurityEvents />
            },
            {
                name: "Compliance Policies",
                component: <CompliancePolicies />
            },
            {
                name: "Alerts",
                component: <Alerts />
            },
            {
                name: "Inputs",
                component: <Inputs />
            }
        ];
    }

    showHideDetail = () => {
        const { display_detail } = this.state;
        this.setState({
            display_detail: !display_detail,
        })
    }

    async componentDidMount() {
        const queryPrm = new URLSearchParams(this.props.location.search);
        const assetId = queryPrm.get('assetId')
        const orgId = queryPrm.get('orgId')
        console.log("asset id: " + assetId);
        await this.getAccounts(assetId, orgId);
    }

    getAccounts = async (id: any, orgId: any) => {
        try {
            await RestService.getData(config.GET_ACCOUNT_BY_ID + `?id=${id}`, null, null).then(
                (response: any) => {
                    this.setState({
                        displaygetEnvironmentData: response,
                        tableData: response.assetList,
                    });
                });
        } catch (err) {
            console.log("Loading accounts failed. Error: ", err);
        }
    }

    displayAwsData() {
        const { displaygetEnvironmentData } = this.state;
        let retData = [];

        // for (let i = 0; i < displaygetEnvironmentData.length; i++) {

        let row = displaygetEnvironmentData;
        // console.log("Accounts info : ", row);
        if (row.cloudType.toLowerCase() === "AWS".toLowerCase()) {
            row.date = dateFormat(row.createdOn)
            console.log("createdOn: ", row.createdOn);
            const { display_detail } = this.state;
            retData.push(
                <div>
                    <div className="heading">
                        <span><img src={images.awsLogo} alt="" /></span><h2>Amazon Web Services</h2>
                        <div className="icon float-right" onClick={this.showHideDetail}><i className={display_detail ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true"></i></div>
                    </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-gl-12 col-md-12 col-sm-12 col-xs-12">
                                    <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-createbtn">
                                        <a onClick={e => this.onClickOrganisationUnit(e, row.organization && row.organization.name)} className="blue-button m-r-0 min-width-inherit width-auto create-btn" style={{ float: 'right',marginTop:'25px' }}>
                                            Organisation Unit
                                        </a>
                                    </Rbac>
                                </div>
                            </div>
                        </div> */}

                    {display_detail &&
                        <div className="service-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">Account Holder Name</div>
                                        </div>
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added"><span>{row.name}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">Organisation</div>
                                        </div>
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added"><span>{row.organization && row.organization.name}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="row">
                                        {/* <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="services-added">Account Number</div>
                                </div> */}
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">Account Number</div>
                                        </div>
                                        {/* <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                                    <div className="services-added"><span>AWS ({row.tenantId})</span></div>
                                </div> */}
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added"><span>{row.tenantId}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">Organisation Unit</div>
                                        </div>
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added"><span>{row.organizationalUnit && row.organizationalUnit.name}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">Total Online Instances</div>
                                        </div>
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">0</div>
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
                                    {/* <div className="row">
                                <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="services-added">Cloud Guard ID</div>
                                </div>
                                <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                                    <div className="services-added">e5b82995-c0fc-729d-a67b-926r81a5963d</div>
                                </div>
                            </div> */}
                                    <div className="row">
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">Cloud Guard ID</div>
                                        </div>
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
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
                                            <div className="services-added">0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    {/* <div className="row">
                                <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="services-added">Added At</div>
                                </div>
                                <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                                    <div className="services-added">{row.date}</div>
                                </div>
                            </div> */}
                                    <div className="row">
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">Added At</div>
                                        </div>
                                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                                            <div className="services-added">{row.date}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                </div>

            );

        }

        // }
        return retData;

    } 
    
    onClickOrganisationUnit = (e: any, selectedorganization: any) => {
        console.log("selectedEnviornment", selectedorganization);
        this.OrganisationunitRef.current.toggle(selectedorganization);
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
                                    <Link to={`${config.basePath}/environments`} className="asset-white-button min-width-inherit m-r-0">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-b-0">
                        {this.state.displaygetEnvironmentData &&
                            <div className="service-full-container">
                                {this.displayAwsData()}
                            </div>
                        }
                    </div>
                    <div className="common-container border-bottom-0">
                        <Wizard steps={this.steps} />
                    </div>
                </div>
            </div>
        );
    }
};