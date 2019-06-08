import firebaseService from "../../../services/firebase.service";

export const loginUserWithFirebase = model =>dispatch => {
    const {email, password} = model;

    firebaseService.auth && firebaseService.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log("Logged in");
        })
}

