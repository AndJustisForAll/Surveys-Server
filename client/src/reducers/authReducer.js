import {
    FETCH_USER
} from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            //3 scenarios
            //request is pending; we return null => state is default to null
            //user is logged in; return payload
            //user isn't logged in; return false
            return action.payload || false;
        default:
            return state;
    }
};
