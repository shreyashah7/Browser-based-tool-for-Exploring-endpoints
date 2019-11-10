/**
 * Main Landing Page retrieving the config data and generating the explorer component
 * @author - Shreya Shah
 */
import React, { Component } from 'react';
import ExplorerComponent from './ExplorerConfiguration/explorer.component';
import * as ApiConfig from './ConfigData/APIConfig';

class SmartcarFrontend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    /** Fetches the Config data immediately after a 
     *  component is mounted to render screen with config data 
     */
    componentDidMount() {
        this.setState({
            data: ApiConfig.configData
        })
    };

    render() {
        return (
            <div className="SmartCar-App">
                {
                    this.state.data.map(function (item, index) {
                        return (
                            <ExplorerComponent
                                key={index}
                                indexVal={index}
                                title={item.title}
                                url={item.url}
                                method={item.method}
                                body={item.body}
                                headers={item.headers}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default SmartcarFrontend;