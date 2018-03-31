import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import SurveyForm from './SurveyForm'; // eslint-disable-line no-unused-vars
import SurveyFormReview from './SurveyFormReview'; // eslint-disable-line no-unused-vars
import { reduxForm } from 'redux-form';

class NewSurveyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSurveyFormReview: false
        };
    }

    renderContent() {
        if (this.state.showSurveyFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({ showSurveyFormReview: false })}/>;
        }
        return <SurveyForm onSurveySubmit={() => this.setState({ showSurveyFormReview: true})} />;
    }

    render() {
        return this.renderContent();
    }
}

export default reduxForm({
    form: 'surveyForm'
})(NewSurveyForm);
