import * as React from 'react';
import { images } from '../../img';
import { Collapse } from 'reactstrap';

export class DiscoveredAssets extends React.Component<any, any>{
    CreateNewOURef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            tableData: [],
        };
    }

    displayTable = () => {
        // const { displaygetEnvironmentData } = this.state;
        const retData = [];

        const { tableData } = this.state;
        const length = tableData.length;
        for (let i = 0; i < length; i++) {
            const folder = tableData[i];
            retData.push(this.renderTree(folder, [i]));
        }
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

    render() {
        return (
            <>
                <div className="Filters-box">
                    <p>Select and add Filters</p>
                    <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                </div>
                <div className="showing-export">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="showing-heading">
                                {/* Showing results 81 of 81 */}
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
                    <div className="container-inner">
                        <div className="organisational-data-table">
                            <div className="thead">
                                <div className="thead-th organisational-heading"><span><img src={images.awsLogo} alt="" /></span></div>
                                <div className="thead-th">Organisational Unit</div>
                                <div className="thead-th">Online Instance</div>
                                <div className="thead-th">Status</div>
                                <div className="thead-th">Action</div>
                            </div>
                            {this.displayTable()}
                        </div>
                    </div>

                </div>
            </>
        );
    }
}