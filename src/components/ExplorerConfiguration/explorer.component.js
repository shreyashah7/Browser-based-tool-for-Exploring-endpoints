/**
 * Generates the list of API Endpoints Configuration to send Request
 * @Props {string} url - Url of the Rest API
 * @Props {string} method - HTTP method to perform action - GET,POST,PUT,DELETE
 * @Props {number} indexVal - index of the current api row from the list
 * @Props {Object} body - Request Body Config for sending body parameters in POST and PUT.
 * 
 * @author - Shreya Shah
 */
import React, { Component } from 'react';
import './explorer.css';
import DynamicBody from '../DynamicBodyGeneration/dynamic-body.component';
import * as API from '../../api/API';
import JSONPretty from 'react-json-pretty';

class ExplorerComponent extends Component {

    //@Constructor - Obtain props from the parent class
    constructor(props) {
        super(props);

        this.state = {
            bodyData: [],
            response: {}
        }
        //Binding send Request to access local properties
        this.sendRequest = this.sendRequest.bind(this);
    }

    /** Executes the Rest APIs by sending the endpoint configuration */
    sendRequest(e) {
        /**
         * Collects formdata from the dyanamic body configuration
         * @Reason - As there are multiple input in dynamic form and no button to pass those input at one go,
         * calling parent method on change reduces the performance.
         * Hence accessing the formdata whenever user clicks send request button of explorer component
        */
        const formData = new FormData(e.target);
        let obj = {};
        for (let entry of formData.entries()) {
            if (obj.hasOwnProperty(entry[0])) {
                var val = obj[entry[0]];
                val = val + "," + entry[1];
                obj[entry[0]] = val;
            } else if (entry[1] !== '' && entry[1] !== null) {
                obj[entry[0]] = entry[1];
            }
        }
        //Prepares the config data to request to the server
        let sendData = {};
        sendData.url = this.props.url;
        sendData.method = this.props.method;
        sendData.headers = this.props.headers;
        sendData.body = obj;
        console.log("header :", sendData.headers);
        //Checks the HTTP method for sending body paramaters for POST and PUT
        if (this.props.method === 'POST' || this.props.method === 'PUT') {
            API.callBodyMethod(sendData).then((resultData) => {
                //Sets the response data from request into response object of state
                this.setState({
                    response: JSON.stringify(resultData)
                })
            }).catch((err) => {
                this.setState({
                    response: { 'error': err }
                })
            });
        } else {
            //Checks the HTTP method to remove body paramaters for GET and DELETE
            API.callWithoutBodyMethod(sendData).then((resultData) => {
                //Sets the response data from request into response object of state
                this.setState({
                    response: JSON.stringify(resultData)
                })
            }).catch((err) => {
                this.setState({
                    response: { 'error': err }
                })
            });
        }
    }

    render() {
        return (
            <div className="explorer-component">
                <div className="col-md-12">
                    <div id={"accordion" + this.props.indexVal}>
                        <div className="card">
                            <div className={"card-header" + (this.props.method === "GET"
                                ? " get-card-header" : this.props.method === "POST"
                                    ? " post-card-header" : this.props.method === "PUT"
                                        ? " put-card-header" : " delete-card-header")} id={"heading" + this.props.indexVal}>
                                <h5 className="mb-0">
                                    <div data-toggle="collapse"
                                        data-target={"#collapse" + this.props.indexVal}
                                        aria-expanded="true"
                                        aria-controls={"collapse" + this.props.indexVal}>
                                        <button
                                            className={"btn item-block float-left" + (this.props.method === "GET"
                                                ? " get-block-color" : this.props.method === "POST"
                                                    ? " post-block-color" : this.props.method === "PUT"
                                                        ? " put-block-color" : " delete-block-color")}>
                                            {this.props.method}
                                        </button>
                                        <span className="float-left cursor-hand">{this.props.title}</span>
                                    </div>
                                </h5>
                            </div>

                            <div id={"collapse" + this.props.indexVal}
                                className="collapse"
                                aria-labelledby={"heading" + this.props.indexVal}
                                data-parent={"#accordion" + this.props.indexVal}>
                                <div className="card-body float-left col-sm-12">
                                    <form name="explorer-form" onSubmit={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        this.sendRequest(e)
                                    }}>
                                        <div className="form-group">
                                            <label htmlFor="col-sm-1">Base URL</label>
                                            <div className="col-sm-12 pd-left-0">
                                                <span>{this.props.url}</span>
                                            </div>
                                        </div>
                                        {this.props.body !== undefined &&
                                            <DynamicBody model={this.props.body} />}
                                        <div className="form-group">
                                            <button className="btn btn-info" type="submit" >Send Request</button>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="col-sm-1">Response</label>
                                            <div className="col-sm-11 pd-left-0 response-block">
                                                <JSONPretty id="json-pretty" json={this.state.response}></JSONPretty>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default ExplorerComponent;