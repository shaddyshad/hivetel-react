import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as RegisterActions from '../store/actions/register.actions';

import './Register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            activateBtn: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleRegister = () => {
        const {username, email, password, confirmPassword} = this.state;

        if( !username || !email || !password || !confirmPassword ){
            return null;
        }

        if( password !== confirmPassword ){
            return null
        }

        this.props.registerUserWithFirebase({username, email, password});
    }

    render(){
        return (
            <section className="content">
                <div className="container-center lg animated slideInDown">
                    <div className='view-header'>
                        <div className="header-icon">
                            <i className="material-icons">person_add</i>
                        </div>
                        <div className="header-title">
                            <h3>Register</h3>
                            <small>Please enter your data to register</small>
                        </div>
                    </div>
                    <div className="panel panel-filled">
                        <div className="panel-body">
                            <p></p>
                            <form className="register-form">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label>Username</label>
                                        <input className="form-control" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                                        <span className="form-text small">Your unique username for the app</span>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label>Email</label>
                                        <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                                        <span className="form-text small">Your email address to contact</span>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label>Password</label>
                                        <input className="form-control" name="password" type="password" value={this.state.password} onChange={this.handleChange}  />
                                        <span className="form-text small">Your hard to guess password</span>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label>Repeat Password</label>
                                        <input className="form-control" name="passwordC" type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
                                        <span className="form-text small">Please repeat your password</span>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-accent">Register</button>
                                    <a className="btn btn-default">Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    registerUserWithFirebase: RegisterActions.registerUserWithFirebase
}, dispatch);

export default connect(null, mapDispatchToProps)(Register);