import React, {
    Component
} from 'react';

//redux-form passes in event handlers in the input obj param
class SurveyField extends Component {
    render() {
        const {input, label, type } = this.props;
        const name = input.name;
        return <div className="row">
                <div className="input-field col s6">
                    <input {...input} type={type} id={name} name={name}  />
                    <label htmlFor={name}>{label}</label>
                </div>
            </div>
    }
}

export default SurveyField;
