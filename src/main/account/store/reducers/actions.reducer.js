import { SET_ACCOUNT_DATA, SET_SESSION_DATA } from "../actions";

const initialState = {
    accountData: {},
    sessions: {}
};

const accountReducer = function(state=initialState, action){
    switch(action.type){
        case SET_ACCOUNT_DATA:{
            return {
                ...state,
                accountData: action.payload
            }
        }

        case SET_SESSION_DATA: {
            return {
                ...state,
                sessions: action.payload
            }
        }

        default: 
            return initialState;
    }
}

export default accountReducer;