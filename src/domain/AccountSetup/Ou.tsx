import * as React from 'react';
import { CreateNewOU } from './CreateNewOU';

export class Ou extends React.Component<any, any>{
    CreateNewOURef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            openouCollapseStatus: false
        };
        this.CreateNewOURef = React.createRef();
    }
    opensubouCollapse = () => {
        let collapse = !this.state.openouCollapseStatus;
        this.setState({
            openouCollapseStatus: collapse,
        });
    }
    onClickCreateNewOU = (CreateNewOU: any) => {
        this.CreateNewOURef.current.toggle(CreateNewOU);
    }; 

    render() {
        const { openouCollapseStatus } = this.state;
        return (
            <div className="d-inline-block width-100 account-setup-tab-contents">
                <div className="contents">
                    <div className="sub-heading">
                        <strong>Select Organizational Unit to Associate with Cloud Account Or Create new</strong>
                    </div>
                    <p>Select the OU from below or <strong><a href="#" onClick={this.onClickCreateNewOU}>create new OU</a></strong></p>
                    <div className="collapse-contents">
                        <ul>
                            <li>
                                <div className="text">
                                    {openouCollapseStatus == false && <div onClick={this.opensubouCollapse} className="caret-right"></div>}
                                    {openouCollapseStatus == true && <div onClick={this.opensubouCollapse} className="caret-down"></div>}
                                    Synectiks
                                </div>
                                {openouCollapseStatus == true && <ul className="show">
                                    <li>Finance</li>
                                    <li>IT Networking</li>
                                    <li>Monitoring</li>
                                </ul>}
                            </li>
                        </ul>
                    </div>
                </div>
                <CreateNewOU ref={this.CreateNewOURef} />
            </div>
        );
    }
}