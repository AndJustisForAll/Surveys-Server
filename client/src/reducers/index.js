import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import SurveysReducer from './surveysReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    auth: AuthReducer,
    surveys: SurveysReducer,
    form: reduxForm
});
