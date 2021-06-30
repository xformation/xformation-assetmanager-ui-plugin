import * as React from 'react';
import { images } from '../../../img';
import { WebServiceWizard } from './WebServiceWizard';
import { Entity } from './Entity';
import { Performance } from './Performance';

export class Node extends React.Component<any, any>{
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            currentStep: 0,
            // storageDetail: {},
            storageDetail: {
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
                        component: <Entity />,
                    },
                    {
                        name: "Performance",
                        component: <Performance />,
                        
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
        };
    }

    componentDidMount() {
    }

    displaylist = (list: any) => {
        let retData = [];
        for (let i = 0; i < list.length; i++) {
            retData.push(
                <li><i className="fa fa-angle-right" aria-hidden="true"></i>{list[i].name}</li>
            );
        }
        return retData;
    }

    render() {
        const { storageDetail } = this.state;
        console.log(this.state.storageDetail);
        return (
            <div className="inner">
                <div className="heading">
                    <h3>
                        <span><img src={images.awsLogo} alt="" /></span>
                        {storageDetail.title}
                    </h3>
                    <div className="breadcrumbs">
                        <ul>
                            <li>Account Number - <span>{storageDetail.acNo}</span></li>
                        </ul>
                    </div>
                </div>
                <div className="account-box">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="breadcrumbs">
                                <ul>
                                    <li>Account Number - <span>{storageDetail.acNo}</span></li>
                                    {this.displaylist(storageDetail.pagelink)}
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
                <WebServiceWizard steps={storageDetail.steps} />
            </div>
        );
    }
}