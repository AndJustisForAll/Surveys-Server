import axios from 'axios';
import * as types from './types';

export const fetchUser = () =>
    async dispatch => {
        const currentUser = await axios.get('/api/current_user');
        dispatch({
            type: types.FETCH_USER,
            payload: currentUser.data
        });
    };

export const handleToken = (token) =>
    async dispatch => {
        const res = await axios.post('api/stripe', token);
        dispatch({
            type: types.FETCH_USER,
            payload: res.data
        });
    };

export const fetchSurveys = () =>
    async dispatch => {
        const surveys = await axios.get('/api/surveys');
        dispatch({
            type: types.FETCH_SURVEYS,
            payload: surveys.data
        });
    }

export const sendSurvey = (data, history) =>
    async dispatch => {
        const res = await axios.post('/api/surveys', data);
        history.push('/surveys');
        dispatch({
            type: types.SEND_SURVEY,
            payload: res.data
        });
    }
