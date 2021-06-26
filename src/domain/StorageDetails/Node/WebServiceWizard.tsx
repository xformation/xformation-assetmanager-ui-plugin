import * as React from 'react';

export class WebServiceWizard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            currentStep: 0
        };

    }

    onClickStepButton = (activeStep: any) => {
        this.setState({
            currentStep: activeStep
        });
        // this.props.submitPage();
    };

    createStepLine = () => {
        const { steps } = this.props;
        const { currentStep } = this.state;
        const retData = [];
        if (steps && steps.length > 0) {
            const totalSteps = steps.length;
            for (let i = 0; i < totalSteps; i++) {
                const step = steps[i];
                retData.push(<li className={`${currentStep === i ? 'active' : ''}`} onClick={e => this.onClickStepButton(i)}><a href="#">{step.name}</a></li>);
            }
            return retData;
        }
    };

    createStepContainer = () => {
        const { steps } = this.props;
        const { currentStep } = this.state;
        const retData = [];
        if (steps && steps.length > 0) {
            if (steps[currentStep].nodeTree) {
                const totalSteps = steps[currentStep].nodeTree;
                for (let i = 0; i < totalSteps.length; i++) {
                    const step = totalSteps[i];
                    retData.push(
                        <li>
                            <a href="#">
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                                {step.name}
                            </a>
                        </li>
                    );
                }
            } else {
                retData.push(
                    <div className={`webservice-step-component`}>{steps[currentStep].component}</div>
                )
            }
        }
        return retData;
    };

    render() {
        const { currentStep } = this.state;
        const { steps } = this.props;
        return (
            <div className="webservice-tabs-container">
                <div className="tabs">
                    <ul>
                        {this.createStepLine()}
                    </ul>
                </div>
                <div className="tabs-container">
                    <div className="storage-section">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="network-boxs">
                                    <ul>
                                        {this.createStepContainer()}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="storage-details text-center">
                                    <h4>Storage details will be displayed here</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
