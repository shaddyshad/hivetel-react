// action creators to create all stats

const SET_ACCOUNT_BALANCE = "[APP]-SET_ACCOUNT_BALANCE";
const SET_INBOUND_STATS = "[APP]-SET_INBOUND_STATS";
const SET_OUTBOUND_STATS = "[APP]-SET_OUTBOUND_STATS";

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

    dispatch({
        type: SET_INBOUND_STATS,
        payload: inbound
    });
}

export const processOutbound = () => (getState, dispatch) => {
    const sessions = getState().sessions;

    let outbound = reduceStats(sessions, 'outbound');

    dispatch({
        type: SET_OUTBOUND_STATS,
        payload: outbound
    })

}

export const processAccountBalance = () => (getState, dispatch) => {
    const sessions = getState().accountData;

    const amount = sessions.accountBalance;

    dispatch({
        type: SET_ACCOUNT_BALANCE,
        payload: amount
    });
}