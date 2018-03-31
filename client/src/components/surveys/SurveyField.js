import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

//redux-form passes in event handlers in the input obj param
class SurveyField extends Component {
    render() {
        const { input, label, type, meta: { error, touched } } = this.props;
        const name = input.name;
        return <div className="row">
            <div className="input-field col s6">
                <input {...input} type={type} id={name} name={name}  />
                <label htmlFor={name}>{label}</label>
                <div className="card-pane">
                    <span className="red-text">{touched && error}</span>
                </div> 
            </div>
        </div>;
    }
}

export default SurveyField;
