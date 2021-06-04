import * as React from 'react';

export class CreateRole extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            displayname: '',
            accesskeyID: '',
            secretekeyID: '',
            isSubmitted: false,
        };
    }

    componentDidMount() {
        console.log("componentDidMount submitted : "+this.props.submitted);
        // this.setState({
        //     isSubmitted: this.props.submitted,
        // })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate submitted : "+this.props.submitted);
        // this.setState({
        //     isSubmitted: this.props.submitted,
        // })
    }

    validate = (submitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        let isValid = true;
        const retData = {
            displayname: validObj,
            accesskeyID: validObj,
            secretekeyID: validObj,
            isValid
        };
        if (submitted) {
            const { displayname, accesskeyID, secretekeyID } = this.state;
            if (!displayname) {
                retData.displayname = {
                    isValid: false,
                    message: ("Display is required")
                };
                isValid = false;
            }
            if (!accesskeyID) {
                retData.accesskeyID = {
                    isValid: false,
                    message: ("Access key Id is required")
                };
                isValid = false;
            }
            if (!secretekeyID) {
                retData.secretekeyID = {
                    isValid: false,
                    message: ("Secrete key Id is required")
                };
                isValid = false;
            }
        }
        retData.isValid = isValid;
        return retData;
    }

    handleStateChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { displayname, accesskeyID, secretekeyID, isSubmitted } = this.state;
        const errorData = this.validate(isSubmitted);
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
                                <input className="form-control" type="text" name="displayname" value={displayname} placeholder="Normal" onChange={this.handleStateChange}></input>
                            </div>
                            <span>{errorData.displayname.message}</span>
                            <div className="form-group">
                                <label>Access Key Id</label>
                                <input className="form-control" type="text" name="accesskeyID" value={accesskeyID} placeholder="Normal" onChange={this.handleStateChange}></input>
                            </div>
                            <span>{errorData.accesskeyID.message}</span>
                            <div className="form-group">
                                <label>Secrete Key</label>
                                <input className="form-control" type="text" name="secretekeyID" value={secretekeyID} placeholder="Normal" onChange={this.handleStateChange}></input>
                            </div>
                            <span>{errorData.secretekeyID.message}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}