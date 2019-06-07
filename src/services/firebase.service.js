import firebaseConfig from './firebase.config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class FirebaseService {

    /*
     *  Intiliaze and set the necessary firebase data structures
    */

    init() {

        if( firebase.apps.length ) {
            return;
        }

        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.firestore();

    }

    /*
     * Fetch user profile data from the /users/{userId} db endpoint
    */

    getUserData = userId => {

        if( !firebase.apps.length ) {
            return null;
        }

        return new Promise((resolve, reject) => {
            this.db.collection('users')
                .doc(userId)
                .get()
                .then(snapshot => {
                    resolve(snapshot);
                })
        })
    }

    /*
     * Update user profile data at /users/{userId}
    */

    updateUserData = user => {

        if( !this.auth ) {
            return;
        }

        return this.db.collection('users')
            .doc(user.uid)
            .set(user, {merge: true});
    }

    /*
     * Manage the authentication state
    */

    onAuthStateChanged = (cb) => {

        if( !this.auth ){
            return null;
        }

        return this.auth.onAuthStateChanged(cb);
    }

    /*
     * sign out a logged in user
    */

    signOut = () => {

        if( !this.auth ){
            return null;
        }

        return this.auth.signOut();
    }
}

const firebaseService = new FirebaseService();

export default firebaseService;
