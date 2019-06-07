import firebaseService from '../../../../services';

export const SET_SESSION_DATA = "[ACCOUNT]-SET_SESSION_DATA";
export const SET_ACCOUNT_DATA = "[ACCOUNT]-SET_ACCOUNT_DATA";

export function setAccountData(){
    return (getState, dispatch) => {
        const {uid} = getState().account.uid;

        firebaseService.db && 
        firebaseService.db.collection('accounts').doc(uid).get().then(
            (accountData) => {
                if( !accountData.exists){
                    return null;
                }

                dispatch({
                    type: SET_ACCOUNT_DATA,
                    payload: accountData.data()
                });

                // Process the stats data from sessions 
                const sessions = accountData.data().sessions;
                const sessionList = [];

                // Session list 
                sessions.map(session => {
                    // Each session is a 
                    firebaseService.db && 
                    firebaseService
                        .db
                        .collection('sessions')
                        .doc(session).get( sessionData => {
                            if( sessionData.exists ){
                                return null;
                            }

                            const sessData = sessionData.data();

                            sessionList.push(sessData);
                        })
                });

                dispatch({
                    type: SET_SESSION_DATA,
                    payload: sessionList
                });
            }
        )
    }
}
