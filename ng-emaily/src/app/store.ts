import { IUser } from './classes/user';

export interface IAppState {
    auth: IUser;
}

export const INITIAL_STATE: IAppState = {
    auth: {
        googleID: '',
        name: '',
        credits: 0,
        isLogged: false
    }
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                auth: { ...action.auth, isLogged: !!action.auth.googleID }
            };
        default:
            return state;
    }
}
