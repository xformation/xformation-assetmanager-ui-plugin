import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { Wizard } from './Wizard';
import { OperationMode } from './OperationMode';
import { PreparePolicy } from './PreparePolicy';
import { CreateRole } from './CreateRole';
import { Ou } from './Ou';

export class AccountSetup extends React.Component<any, any> {
    breadCrumbs: any;
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            
        };
        this.steps = [
            {
                name: "Operation Mode",
                component: <OperationMode />
            },
            {
                name: "Prepare Policy",
                component: <PreparePolicy />
            },
            {
                name: "Create Role",
                component: <CreateRole />
            },
            {
                name: "OU",
                component: <Ou />
            },
            {
                name: "Review",
                component: <div>Review</div>
            }
        ];
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
                <div className="accountsetup-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="float-right common-right-btn ">
                                    <Link to={`${config.basePath}/`} className="asset-white-button min-width-inherit">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container">
                        <Wizard steps={this.steps} />
                    </div>
                </div>
            </div>
        );
    }
};