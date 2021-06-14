import * as React from 'react';
import { Wizard } from './Wizard';
import { VerifyInputs } from './VerifyInputs';
import { EnableDashboard } from './EnableDashboard';
import { VerifyAndSave } from './VerifyAndSave';


export class Performance extends React.Component<any, any>{
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            enablePerformanceMonitoring: false,
        };
        this.steps = [
            {
                name: "Verify Inputs",
                component: () => <VerifyInputs />
            },
            {
                name: "Enable Dashboard",
                component: () => <EnableDashboard />
            },
            {
                name: "Preview",
                component: () => <div>Preview</div>
            },
            {
                name: "Verify and save",
                component: () => <VerifyAndSave />
            }
        ]
    }

    enablePerformanceMonitoring = () => {
        this.setState({
            enablePerformanceMonitoring: !this.state.enablePerformanceMonitoring,
        });
    };

    render() {
        const { enablePerformanceMonitoring } = this.state;
        return (
            <>
                {!enablePerformanceMonitoring && (
                    <>
                        <div className="performance-box">
                            <div className="performance-inner">
                                <strong>Performance Monitoring is not enabled yet</strong>
                                <p>To endble Performance Monitoring dashboards you will first have to configure the inputs for data collection</p>
                                <button className="asset-blue-button" onClick={this.enablePerformanceMonitoring}>Enable Performance Monitoring</button>
                            </div>
                        </div>
                        <div className="note-text">
                            <div className="note-text-inner">
                                <p><strong>Note:</strong> This screen will be displayed only for first time setup, if Inputs are already configured we will show list of dashboards as shown in last screen of this process flow</p>
                            </div>
                        </div>
                    </>
                )}
                {enablePerformanceMonitoring && (
                    <Wizard steps={this.steps} />
                )}
            </>
        );
    }
}