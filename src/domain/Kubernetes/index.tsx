import * as React from 'react';

export class Kubernetes extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className="asset-container">
                <div className="service-container">
                    <iframe src="http://127.0.0.1:7777/#/" frameBorder="0" width="100%" height="100%"></iframe>
                </div>
            </div>
        );
    }
};