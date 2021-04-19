import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { RestService } from '../_service/RestService';
import Rbac from '../../components/Rbac';
import { InputAccount } from './InputAccout';
export class CreateButtonInput extends React.Component<any, any> {
    InputAccountRef: any;
 
    
    constructor(props: any) {
        super(props);
        this.state ={
            openCreateMenu: false,
        }
        this.InputAccountRef = React.createRef();

    }
 onClickOpenSubLink = () => {
        let menu = !this.state.openCreateMenu;
        this.setState({
            openCreateMenu: menu,
        });
    }
    
    // onClickInputAccount = () => {
    //     this.InputAccountRef.current.toggle();
    // }
    onClickInputAccount = (e: any, selectedEnviornment: any) => {
        this.InputAccountRef.current.toggle(selectedEnviornment);

    };
   
   
    async componentDidMount() {
        this.getEnvironment();

    }

    getEnvironment = async () => {
        this.setState({
            isApiCalled: true
        });
        try {
            await RestService.getData(config.GET_ALL_ENVIRONMENT, null, null).then(
                (response: any) => {
                    this.setState({
                        Environment: response,
                        EnvironmentName: response
                    });
                  
                   
                }
               

            );

        } catch (err) {
           
        }
        this.setState({
            isApiCalled: false
        });
    }
  
    render() {
        const { openCreateMenu,EnvironmentName  } = this.state;

        return (
            <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-createbtn">
                <a className="fa fa-ellipsis-h" onClick={this.onClickOpenSubLink } ></a>                                   
                </Rbac>
                
                {openCreateMenu == true && 
                <div className="text-center open-create-menu" style={{right: "-62px" ,top: "15px"}}> 
                    <Rbac  childName="commancomponent-createbuttoncomponent-companytbtn">
                        <a   onClick={e => this.onClickInputAccount(e, 'AWS')}>
                            Add Input
                                        </a>
                    </Rbac>
                </div>
                }      
                   <InputAccount ref={this.InputAccountRef} />        
            </div>
            
        );
    }
};