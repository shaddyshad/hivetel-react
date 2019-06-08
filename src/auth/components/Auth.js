import React, {Component} from 'react';
import firebaseService from '../../services/firebase.service';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../store/actions/user.actions';

class Auth extends Component{
    constructor(props){
        super(props);

        this.firebaseCheck();
    }

    firebaseCheck = () => {
        firebaseService.init();

        firebaseService.auth && 
        firebaseService.onAuthStateChanged((authUser) => {
            if( !authUser ){
                return null;
            }

            firebaseService.getUserData(authUser.uid).then(accountData => {
                if( accountData.exists ){
                    this.props.setUserData(accountData.data())
                }
            })
        })
    }

    render(){
        const children = this.props.children;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setUserData: UserActions.setUserData
}, dispatch)

export default connect(null, mapDispatchToProps)(Auth);