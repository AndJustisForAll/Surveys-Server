import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FIELDS from './formFields';
import * as actions from './../../actions';

class SurveyFormReview extends Component {

    onSubmitSurvey(formValues) {
        const { history } = this.props; //added to props by withRouter helper
        this.props.sendSurvey(formValues, history);
    }

    render() {
        const {
            formValues,
            onCancel
        } = this.props;
        return <div>
            <h5>Please review your information</h5>
            <ul className="collection">
                {FIELDS.map(field =>
                    <li key={field.name} className="collection-item avatar">
                        <i className="material-icons circle">text_fields</i>
                        <span className="title">{field.label}</span>
                        <p>{formValues[`${field.name}`]}</p>
                    </li>
                )}
            </ul>
            <button className="btn red" onClick={
                onCancel}>Back</button>
            <button className="green btn-flat right" onClick={
                () => this.onSubmitSurvey(formValues)}>Send Survey<i className="material-icons">email</i></button>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));