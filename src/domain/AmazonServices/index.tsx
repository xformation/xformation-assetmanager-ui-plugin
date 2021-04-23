import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
import { config } from '../../config';
import { images } from '../../img';
import { Collapse } from 'reactstrap';
import { RestService } from '../_service/RestService';
import { OrganisationUnit} from '../OrganisationUnit/OrganistaionUnit';
import Rbac from '../../components/Rbac';
import * as dateFormat from 'dateformat'
// import { Customselectbox } from '../../Components/Customselectbox';
export class AmazonServices extends React.Component<any, any> {
    breadCrumbs: any;
    dateFormat: any
    OrganisationunitRef:any;
    constructor(props: any) {
        super(props);
        this.state = {
            display_detail: true,
            displaygetEnvironmentData:null,
            
            tableData: [
                {
                    title: 'VPC 1', unit: '', instance: 'N/A',
                    status: true,
                    isOpened: false,
                    subData: [
                        {
                            title: 'EC2', unit: '', instance: 'N/A', status: true, isOpened: false,
                            subData: [
                                { title: 'Node1', unit: '', instance: 'N/A', status: true },
                                { title: 'Node2', unit: '', instance: 'N/A', status: true },
                                { title: 'Node3', unit: '', instance: 'N/A', status: true },
                                { title: 'Node4', unit: '', instance: 'N/A', status: true },
                                { title: 'Node5', unit: '', instance: 'N/A', status: true }
                            ]
                        },
                        { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Load Balancer', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Firewall', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'CDN', unit: '', instance: 'N/A', status: true, isOpened: false }
                    ]
                },
                {
                    title: 'Node', unit: '', instance: 'N/A', status: true, isOpened: false,
                    subData: [
                        {
                            title: 'EC2', unit: '', instance: 'N/A', status: true, isOpened: false,
                            subData: [
                                { title: 'Node1', unit: '', instance: 'N/A', status: true },
                                { title: 'Node2', unit: '', instance: 'N/A', status: true },
                                { title: 'Node3', unit: '', instance: 'N/A', status: true },
                                { title: 'Node4', unit: '', instance: 'N/A', status: true },
                                { title: 'Node5', unit: '', instance: 'N/A', status: true }
                            ]
                        },
                        { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Load Balancer', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Firewall', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'CDN', unit: '', instance: 'N/A', status: true, isOpened: false }
                    ]
                },
                {
                    title: 'VPC 2', unit: '', instance: 'N/A', status: true, isOpened: false,
                    subData: [
                        {
                            title: 'EC2', unit: '', instance: 'N/A', status: true, isOpened: false,
                            subData: [
                                { title: 'Node1', unit: '', instance: 'N/A', status: true },
                                { title: 'Node2', unit: '', instance: 'N/A', status: true },
                                { title: 'Node3', unit: '', instance: 'N/A', status: true },
                                { title: 'Node4', unit: '', instance: 'N/A', status: true },
                                { title: 'Node5', unit: '', instance: 'N/A', status: true }
                            ]
                        },
                        { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Load Balancer', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'Firewall', unit: '', instance: 'N/A', status: true, isOpened: false },
                        { title: 'CDN', unit: '', instance: 'N/A', status: true, isOpened: false }
                    ]
                },
                { title: 'RDS', unit: '', instance: 'N/A', status: true, isOpened: false },
                { title: 'Database', unit: '', instance: 'N/A', status: true, isOpened: false },
                { title: 'VPC 3', unit: '', instance: 'N/A', status: true, isOpened: false }
            ],
        };
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
        this.OrganisationunitRef = React.createRef();
    }

    showHideDetail = () => {
        const { display_detail } = this.state;
        this.setState({
            display_detail: !display_detail,
        })
    }

    // displayTable = () => {
    //     const { displaygetEnvironmentData } = this.state;
    //     const retData = [];
        
    //     const { tableData } = this.state;
    //     const length = tableData.length;
    //     for (let i = 0; i < length; i++) {
    //         const folder = tableData[i];
    //         retData.push(this.renderTree(folder, [i]));
    //     }
    //     return retData;
    // }
    async componentDidMount() {
        const queryPrm = new URLSearchParams(this.props.location.search);
        const assetId = queryPrm.get('assetId')
        const orgId = queryPrm.get('orgId')
        console.log("asset id: "+assetId);
        await this.getEnvironment(assetId, orgId);
        // this.displayList();
    }

    getEnvironment = async (assetId : any, orgId: any) =>{
        this.setState({
            isApiCalled: true
        });
        try {
            await RestService.getData(config.GET_ACCOUNT_BY_ID+`?envId=${assetId}&orgId=${orgId}`, null, null).then(
                (response: any) => {
                    this.setState({
                        // Environment: response,
                        displaygetEnvironmentData: response,       
                    });     
                    console.log(" response", response);
            });
        } catch (err) {
            console.log("Loading catalog failed. Error: ", err);
        }
        this.setState({
            isApiCalled: false
        });
    }

    // displayList () {
    //     const { displaygetEnvironmentData } = this.state;
    //      let retData = [];
    //     //  for (let i = 0; i < displaygetEnvironmentData.length; i++) {
    //         console.log("i am hare ",displaygetEnvironmentData.environment);
    //         let row = displaygetEnvironmentData.environment;
    //         console.log("i am",row);
    //          if(row.type==="AWS"){
    //             console.log("i am",row.environment.type);
    //              retData.push(
    //                  console.log("Loading data11 : ", row),
    //         <tr>
    //             <td>
    //             <td> {row.environment.name}</td>
                           
    //             </td>
    //             <td>{row.organization && row.organization.name}</td>
    //             <td>{row.organizationalUnit && row.organizationalUnit.name}</td> 
    //             <td>{row.environment.instance}</td>
    //             <td>
    //                 <div className={row.environment.status ? "status enable" : "status disable"}></div>
    //             </td>
    //         </tr>
    //             );
    //          }
      
    //     //  }
    //       return retData;
    // }

    displayAwsData() {
        const { displaygetEnvironmentData } = this.state;
        let retData = [];
        
        // for (let i = 0; i < displaygetEnvironmentData.length; i++) {
           
            let row = displaygetEnvironmentData;
            if(row.environment.type=="AWS"){
                row.date = dateFormat(row.environment.createdOn)
                console.log("date=",row.environment.createdOn);

               
                const { display_detail } = this.state;
            retData.push(
                <div>
                <div className="heading"><span><img src={images.awsLogo} alt="" /></span><h2>Amazon Web Services</h2>
                <div className="icon float-right" onClick={this.showHideDetail}><i className={display_detail ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true"></i></div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-gl-12 col-md-12 col-sm-12 col-xs-12">
                        <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-createbtn">
                            <a onClick={e => this.onClickOrganisationUnit(e, row.organization && row.organization.name)} className="blue-button m-r-0 min-width-inherit width-auto create-btn" style={{ float: 'right',marginTop:'25px' }}>
                                Organisation Unit
                            </a>
                        </Rbac>
                    </div>
                  </div>
               </div>
             
             {display_detail && 
                <div className="service-content">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="services-added">Account Name</div>
                        </div>
                        <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="services-added"><span>{row.environment.name}</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added">Organisation</div>
                        </div>
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added"><span>{ row.organization && row.organization.name}</span></div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="services-added">Organisation Unit</div>
                        </div>
                        <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="services-added">null</div>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added">Total Online Instances</div>
                        </div>
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added">0</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="services-added">Account Number</div>
                        </div>
                        <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="services-added"><span>0</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added">Full Protection Security Group</div>
                        </div>
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added">0</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="services-added">Cloud Guard ID</div>
                        </div>
                        <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="services-added">e5b82995-c0fc-729d-a67b-926r81a5963d</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added">Read Only Security Group</div>
                        </div>
                        <div className="col-gl-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="services-added">0</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-gl-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="services-added">Added At</div>
                        </div>
                        <div className="col-gl-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="services-added">{row.date}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            }
            </div>
             
            );
            
        }
      
    // }
        return retData;
 
    }

    renderTree = (folder: any, indexArr: any): any => {
        const retData = [];
        const subFolders = folder.subData;
        const subFolderJSX = [];
        if (subFolders != undefined) {
            for (let j = 0; j < subFolders.length; j++) {
                const subFolder = subFolders[j];
                let subIndexArr: any = [];
                subIndexArr = [...indexArr, j];
                subFolderJSX.push(
                    <>
                        {(subFolder.subData == undefined) &&
                            <div className="tbody">
                                <div className="tbody-inner">
                                    <div className="tbody-td first">
                                        <div className="caret-right"></div>
                                        {subFolder.title}
                                    </div>
                                    <div className="tbody-td">{subFolder.unit}</div>
                                    <div className="tbody-td">{subFolder.instance}</div>
                                    <div className="tbody-td">
                                        <div className={subFolder.status ? "status-icon enable" : "status-icon disable"}></div>
                                    </div>
                                    <div className="tbody-td">
                                        <div className="d-flex">
                                            <button className="btn btn-link" id="PopoverFocus">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            subFolder.subData &&
                            this.renderTree(subFolder, subIndexArr)
                        }

                    </>
                );
            }
        }
        retData.push(
            <div className="tbody">
                <div className="tbody-inner">
                    <div className="tbody-td first">
                        {!folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
                        {folder.subData && <div className={folder.isOpened ? "caret-down" : "caret-right"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></div>}
                        {folder.title}
                    </div>
                    <div className="tbody-td">{folder.unit}</div>
                    <div className="tbody-td">{folder.instance}</div>
                    <div className="tbody-td">
                        <div className={folder.status ? "status-icon enable" : "status-icon disable"}></div>
                    </div>
                    <div className="tbody-td">
                        <div className="d-flex">
                            <button className="btn btn-link" id="PopoverFocus">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <Collapse className="collapse-content" isOpen={folder.isOpened}>
                    {subFolderJSX}
                </Collapse>
            </div>
        );
        return retData;
    }

    onClickOpenSubTreeArr = (indexArr: any) => {
        const { tableData } = this.state;
        const folder = this.findChild(tableData, [...indexArr]);
        folder.isOpened = !folder.isOpened;
        this.setState({
            tableData
        });
    }

    findChild = (folderList: any, indexArr: any): any => {
        const index = indexArr.splice(0, 1)[0];
        if (indexArr.length === 0) {
            return folderList[index];
        } else {
            return this.findChild(folderList[index].subData, indexArr);
        }
    };
    onClickOrganisationUnit = (e: any, selectedorganization: any) => {
        console.log("selectedEnviornment",selectedorganization);
         this.OrganisationunitRef.current.toggle(selectedorganization);
    } 
    render() {
       
        return (
            <div className="asset-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PERFORMANCE MANAGEMENT" />
                <div className="service-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="asset-heading">
                                    Environments
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="float-right common-right-btn">
                                    <Link to={`${config.basePath}/`} className="asset-white-button min-width-inherit m-r-0">
                                        <i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-b-0">
                        {this.state.displaygetEnvironmentData && 
                            <div className="service-full-container">
                                        {this.displayAwsData()}
                            </div>
                            
                        }              
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="urganisational-unit-container">
                            <div className="unit-tabs">
                                <ul>
                                    <li><a href="#" className="active">Discovered Assets</a></li>
                                    <li><a href="#">KPI Monitored</a></li>
                                    <li><a href="#">Log Monitored</a></li>
                                    <li><a href="#">Compliance Policies</a></li>
                                    <li><a href="#">Threat and Security Events</a></li>
                                </ul>
                            </div>
                            <div className="Filters-box">
                                <p>Select and add Filters</p>
                                <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                            </div>
                            <div className="showing-export">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="showing-heading">
                                            Showing results 81 of 81
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                        <div className="export-files">
                                            <span><i className="fa fa-sign-out"></i></span>
                                            <p>Expport</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                        <div className="search-box form-group">
                                            <input type="text" className="control-form" placeholder="Search" value="" /><button><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="organisational-details">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th><span><img src={images.awsLogo} alt="" /></span> AWS</th>
                                        <th>Organisation</th>
                                        <th>Organisational Unit</th>
                                        <th>Online Instance</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.displayAWSAccountList(aws_table_data)} */}
                                    {/* {this.displayList ()} */}
                                    {/* {this.displayAwsData()} */}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
                <OrganisationUnit ref={this.OrganisationunitRef} />   
            </div>
        );
    }
};