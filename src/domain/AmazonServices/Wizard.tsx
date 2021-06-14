import * as React from 'react';

export class Wizard extends React.Component<any, any>{
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
        this.props.submitPage();
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
            const totalSteps = steps.length;
            for (let i = 0; i < totalSteps; i++) {
                const step = steps[i];
                retData.push(<div className={`wizard-step-component ${currentStep === i ? '' : 'd-none'}`}>{step.component}</div>);
            }
        }
        return retData;
    };

    render() {
        const { currentStep } = this.state;
        const { steps } = this.props;
        return (
            <div className="urganisational-unit-container">
                <div className="unit-tabs">
                    <ul>
                        {this.createStepLine()}
                    </ul>
                </div>
                <div className="unit-tabs-container">
                    {this.createStepContainer()}
                </div>
            </div>
        );
    }
}
