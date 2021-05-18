import * as React from 'react';

export class CreateRole extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="d-inline-block width-100 account-setup-tab-contents">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="account-setup-left-contents">
                            <div className="contents">
                                <strong style={{ paddingBottom: '20px' }}>Create IAM user for Synectiks Monitoring</strong>
                                <p>
                                    Login to AWS console (<a href="#">aws.amazon.com</a>)<br />
                                Click ‘<strong>Services</strong>‘ on the top and ‘<strong>IAM</strong>‘ in the dropdown.<br />
                                Click ‘users‘ on the left pane<br />
                                Create New User: '<strong>Synectiks Monitoring</strong>', make sure to provide programmatic access only<br />
                                Click on '<strong>Next: Permission</strong>'<br />
                                Select Attach existing policies directly and select the following policies:
                                </p>
                                <ul>
                                    <li>‘SecurityAudit’ (AWS managed policy)</li>
                                    <li>‘Synectiks Monitoring-readonly-policy’ That we created before. You can search for</li>
                                    <li>‘Synectiks Monitoring’ in the filter</li>
                                    <li>‘Synectiks Monitoring-write-policy’ That we created before</li>
                                </ul>
                                <p>
                                    Click on the ‘<strong>Next: Review</strong>‘ button<br />
                                Verify you selected only programmatic access, then click on <strong>Create User</strong><br />
                                Enter the values of "Access key ID" and the "Secret access key" in the right text boxes<br />
                                (save the secret key, you may need it in the future)<br />
                                Click on <a href="#">NEXT</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="account-setup-right-contents">
                            <div className="form-group">
                                <label>Display Name</label>
                                <input className="form-control" type="text" placeholder="Normal"></input>
                            </div>
                            <div className="form-group">
                                <label>Access Key Id</label>
                                <input className="form-control" type="text" placeholder="Normal"></input>
                            </div>
                            <div className="form-group">
                                <label>Secrete Key</label>
                                <input className="form-control" type="text" placeholder="Normal"></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}