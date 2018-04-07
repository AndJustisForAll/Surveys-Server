import { IUser } from './classes/user';
import { ISurvey } from './classes/survey';

export interface IAppState {
    auth: IUser;
    surveys: ISurvey[];
}

export const INITIAL_STATE: IAppState = {
    auth: {
        googleID: '',
        name: '',
        credits: 0,
        isLogged: false
    },
    surveys: []
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                auth: { ...action.auth, isLogged: !!action.auth.googleID }
            };
        case 'FETCH_SURVEYS':
            return {
                ...state,
                surveys: action.surveys
            };
        default:
            return state;
    }
}
