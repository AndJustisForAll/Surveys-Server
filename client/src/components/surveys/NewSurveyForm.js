import React, {
    Component
} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
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
            return <SurveyFormReview 
                onCancel={() => this.setState({ showSurveyFormReview: false })}/>
        }
        return <SurveyForm 
            onSurveySubmit={() => this.setState({ showSurveyFormReview: true})} />
    }

    render() {
        return this.renderContent();
    }
}

export default reduxForm({
    form: 'surveyForm'
})(NewSurveyForm);
