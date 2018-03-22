import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';
import {
    reduxForm,
    Field
} from 'redux-form';
import _ from 'lodash';
import SurveyField from './SurveyField';

const FIELDS = [{
        label: 'Survey Title',
        name: 'title'
    },
    {
        label: 'Survey Subject',
        name: 'subject'
    },
    {
        label: 'Email Body',
        name: 'emailBody'
    },
    {
        label: 'Recipients',
        name: 'recipients'
    },
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({
            label,
            name
        }) => {
            return <Field key={name} type="text" name={name} label={label} component={SurveyField} />
        });
    }

    render() {
        return <div className="row">
                        <h5 className="center">Create new survey</h5>
                        <form id="newSurveyForm" className="col s12" onSubmit={this.props.handleSubmit(values => console.log(values))}>
                            {this.renderFields()}
                            <Link className="btn red" to="/dashboard">Cancel</Link>
                            <button className="btn right"type="submit">Next<i className="material-icons right">done</i></button>
                        </form>
                </div>

    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
