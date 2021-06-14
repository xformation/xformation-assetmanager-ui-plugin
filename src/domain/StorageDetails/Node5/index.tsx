import * as React from 'react';
import { images } from '../../../img';
import { WebServiceWizard } from './WebServiceWizard';
import { Entity } from './Entity';
import { Performance } from './Performance';

export class Node5 extends React.Component<any, any>{
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            currentStep: 0,
        };
        this.steps = [
            {
                name: "Entity",
                component: <Entity />
            },
            {
                name: "Performance",
                component: <Performance />
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
        ];
    }

    render() {
        return (
            <div className="inner">
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
                                    <li><i className="fa fa-angle-right" aria-hidden="true"></i>Node 5</li>
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
                <div className="displayed-here">
                    <p>Node details will be displayed here</p>
                </div>
                <WebServiceWizard steps={this.steps} />
            </div>
        );
    }
}