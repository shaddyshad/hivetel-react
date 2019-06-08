import { SET_USER_DATA } from "../actions";
import { UPDATE_USER_DATA } from "../actions/register.actions";
import firebaseService from "../../../services/firebase.service";

const initialState = {};

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return action.payload
        case UPDATE_USER_DATA:{
            const {uid, ...data} = action.payload;

            firebaseService.db && firebaseService.db.collection('accounts')
                .doc(uid)
                .update({...data}).then(userData => {
                    return {...state, ...userData}
                }).catch(err => console.log(err))
        }
        break;
        default:
            return state;
    }
}

export default userReducer;