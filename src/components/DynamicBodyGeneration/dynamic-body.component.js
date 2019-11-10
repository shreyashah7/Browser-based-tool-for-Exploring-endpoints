/**
 * Generates the Request Body Input form defined from the body of config
 * @Props {Object} model - Attributes of the input element like name,type and other restrictions like min,max etc
 * 
 * @author - Shreya Shah
 */
import React, { Component } from 'react';
import './dynamic-body.css';

class DynamicBodyComponent extends Component {

    /** Renders the UI form element with dyamic body inputs */
    renderForm = () => {
        //Sets the input attributes given from the config data
        let model = this.props.model;
        let formUI = model.map((m) => {
            //Defines a unique key to each element
            let key = m.name;
            let type = m.type || "text";
            //Creates input elements according to the config mentioned in model
            let input = <input {...m}
                className="form-control col-sm-3"
            />;

            if (type === "radio") {
                //Loop the radio group option generating multiple options of radio
                input = m.options.map((o) => {
                    return (
                        <React.Fragment key={'fr' + o.value}>
                            <input {...m}
                                className="form-check form-check-inline mr-0"
                                key={o.value}
                                value={o.value}
                                name={m.name}
                            />
                            <label className="form-check-label pd-right-5" key={"ll" + o.key}>{o.label}</label>
                        </React.Fragment>
                    );
                });
                input = <div className="form-check pd-left-0">{input}</div>;
            }

            if (type === "select") {
                //Loop the select options specified in the config json
                input = m.options.map((o) => {
                    return (
                        <option
                            key={o.value}
                            value={o.value}
                        >{o.label}</option>
                    );
                });
                input = <select {...m} className="form-control col-sm-3" >{input}</select>;
            }

            if (type === "checkbox") {
                //Loop the checkbox group generating multiple checkboxes
                input = m.options.map((o) => {
                    return (
                        <React.Fragment key={"cfr" + o.value}>
                            <input {...m}
                                className="form-check form-check-inline mr-0"
                                key={o.value}
                                id={o.value}
                                value={o.value}
                                name={m.name}
                            />
                            <label className="form-check-label pd-right-5" key={"ll" + o.key}>{o.label}</label>
                        </React.Fragment>
                    );
                });

                input = <div className="form-check pd-left-0">{input}</div>;
            }

            return (
                <div key={'g' + key} className="form-group row">
                    <label className="col-sm-1 form-label form-text"
                        key={"l" + key}
                        htmlFor={key}>
                        {m.name}
                    </label>
                    {input}
                </div>
            );
        });
        return formUI;
    }
    render() {
        return (
            <div className="dynamic-body" >
                <h5>Body</h5>
                {this.renderForm()}
            </div>
        );
    }
}

export default DynamicBodyComponent;