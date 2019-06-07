import * as Actions from '../actions';

const now = new Date();

const initialState = {
    inbound: {
        data: {},
        lastUpdated: now
    },
    outbound: {
        data: {},
        lastUpdated: now
    },
    accountBalance: {
        data: {},
        lastUpdated: now
    },
    callStats: {
        data: {},
        lastUpdated: now
    },
    talkTime: {
        data: {},
        lastUpdated: now
    }
};

const statsReducer = (state=initialState, action) => {
    switch(action.type){
        case Actions.SET_INBOUND_DATA: {
            return {
                ...state,
                inbound: action.payload
            }
        }

        case Actions.SET_OUTBOUND_DATA: {
            return {
                ...state,
                outbound: action.payload
            }
        }

        case Actions.SET_ACCOUNT_BALANCE: {
            return {
                ...state,
                accountBalance: action.payload
            };
        }

        case Actions.SET_CALL_STATS: {
            return {
                ...state,
                callStats: action.payload
            };
        }

        case Actions.SET_AVERAGE_TIME: {
            return {
                ...state,
                averageTalkTime: action.payload
            }
        }

        default: 
            return initialState;
    }
}

export const statsReducer;