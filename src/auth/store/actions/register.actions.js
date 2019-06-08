import firebaseService from "../../../services/firebase.service";

export const UPDATE_USER_DATA = "[AUTH]-UPDATE_USER_DATA";

export const registerUserWithFirebase = (model) => (dispatch) => {
    const {username, email, password} = model;

    firebaseService.auth.signInWithEmailAndPassword(email, password).then(userData => {
        dispatch({
            type: UPDATE_USER_DATA,
            payload: {
                uid: userData.uid,
                username
            }
        })
    }).catch(err => {
        console.log(err);
    })
}