import * as React from 'react';
import { Wizard } from './Wizard';

export class Performance extends React.Component<any, any>{
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            
        };
        this.steps = [
            {
                name: "Verify Inputs",
                component: () => <div>Verify Inputs</div>
            },
            {
                name: "Enable Dashboard",
                component: () => <div>Enable Dashboard</div>
            },
            {
                name: "Preview",
                component: () => <div>Preview</div>
            },
            {
                name: "Verify and save",
                component: () => <div>Verify and save</div>
            }
        ]
    }

    render() {
        return (
            <>
                <div className="performance-box">
                    <div className="performance-inner">
                        <strong>Performance Monitoring is not enabled yet</strong>
                        <p>To endble Performance Monitoring dashboards you will first have to configure the inputs for data collection</p>
                        <button className="asset-blue-button">Enable Performance Monitoring</button>
                    </div>
                </div> 
                <div className="note-text">
                    <div className="note-text-inner">
                        <p><strong>Note:</strong> This screen will be displayed only for first time setup, if Inputs are already configured we will show list of dashboards as shown in last screen of this process flow</p>
                    </div>
                </div> 
                <Wizard steps={this.steps} />
            </>
        );
    }
}