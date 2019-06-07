import moment from 'moment';

// action creators to create all stats

export const SET_ACCOUNT_BALANCE = "[APP]-SET_ACCOUNT_BALANCE";
export const SET_INBOUND_STATS = "[APP]-SET_INBOUND_STATS";
export const SET_OUTBOUND_STATS = "[APP]-SET_OUTBOUND_STATS";
export const SET_CALL_STATS = "[APP]-SET_CALL_STATS";
export const SET_REJECTED_STATS = "[APP]-SET_REJECTED_STATS";
export const SET_AVERAGE_TIME = "[APP]-SET_AVERAGE_TIME";

function reduceStats(stats, direction){
    let i = 0;

    function reduce(accumulator, currentValue){
        if(currentValue.direction === direction){
            return accumulator + 1;
        }
    }

    return reduce(i, stats);
}

export const processInbound = () => (getState, dispatch) => {
    const sessions = getState().sessions;

    // Reduce them to all incoming

    let inbound = reduceStats(sessions, 'inbound');

    // Process the inbound account
    let data = {
        figure: inbound,
        lastUpdated: new Date(),
        icon: 'phone_callback',
        statName: 'Inbound'
    }

    return dispatch({
        type: SET_INBOUND_STATS,
        payload: data
    });
}

export const processOutbound = () => (getState, dispatch) => {
    const sessions = getState().sessions;

    let outbound = reduceStats(sessions, 'outbound');

    const data = {
        figure: outbound,
        lastUpdated: new Date(),
        icon: 'phone_forward',
        statName: 'Outbound'
    }

    return dispatch({
        type: SET_OUTBOUND_STATS,
        payload: data
    })

}

function reduceRejected(stats){
    let i = 0;

    function reduce(accumulator, currentValue){
        if( currentValue.status === 'aborted'){
            return accumulator + 1;
        }
    }

    return reduce(i, stats);
}

export const processRejected = () => (getState, dispatch) => {
    const sessions = getState().sessions;

    const rejected = reduceRejected(sessions);

    const data = {
        figure: rejected,
        lastUpdated: new Date,
        icon: 'phone_rejected',
        statName: 'Rejected'
    };

    return dispatch({
        type: SET_REJECTED_STATS,
        payload: data
    });
}

const getAverageTalkTime = sessions => {
    const times = sessions.map(session => session.timestamp);

    let totalTime = 0;

    totalTime = times.reduce((total, currentTime) => {
        return moment.duration(total).add(moment.duration(currentTime, 'minutes'))
    })

    return (totalTime / times).toFixed(2);
}

const processAverageTalkTime = () => (getState, dispatch) => {
    const sessions = getState().sessions;

    const averageTimeInMinutes = getAverageTalkTime(sessions);

    const data = {
        figure: averageTimeInMinutes,
        lastUpdated: new Data(),
        icon: 'access_time',
        statName: 'Average talk time'
    }

    return dispatch({
        type: SET_AVERAGE_TIME,
        payload: data
    });
}

export const processAccountBalance = () => (getState, dispatch) => {
    const sessions = getState().accountData;

    const amount = sessions.accountBalance;

    const data = {
        figure: amount,
        lastUpdated: new Date()
    }

    return dispatch({
        type: SET_ACCOUNT_BALANCE,
        payload: data,
        statName: 'Account balance'
    });
}

export const processCallStats = () => (getState, dispatch) => {
    const sessions = getState().sessions;

    let callStats = [];

    for(let i = 0; i < sessions.length; ++i){
        let session = sessions[i];

        if( session.isActive ){
            const {sessionId, timestamp, callDuration} = session;

            callStats.push({
                sessionId,
                callDuration,
                timestamp,
                callerNumber
            });
        }

        
    }

    const data = {
        callStats,
        lastUpdated: new Date(),
    }

    return dispatch({
        type: SET_CALL_STATS,
        payload: data
    });
}