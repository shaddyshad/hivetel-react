import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '../store/actions/login.actions';
import './Register.css';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            disableBtn: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleLogin = event => {
        event.preventDefault();

        const {email, password} = this.state;

        if( !email || !password){
            return null;
        }

        this.props.loginUserWithFirebase({email, password});
    }

    render(){
        return (
            <section className="content">
                <div className="container-center animated slideInDown">
                    <div className="view-header">
                        <div className="header-icon">
                            <i className="material-icons">lock_open</i>
                        </div>
                        <div className="header-title">
                            <h3>Login</h3>
                            <small>Please enter your credential details</small>
                        </div>
                    </div>
                    <div className="panel panel-filled">
                        <div className="panel-body"> 
                            <form className="form" onSubmit={this.handleLogin}>
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="email">
                                        Email
                                    </label>
                                    <input 
                                    value={this.state.email} onChange={this.handleChange}
                                    type="email" className="form-control" title="Please enter your email " name="email" placeholder="example@gmail.com"/>
                                    <small>Your email address</small>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label" htmlFor="password">
                                        Password
                                    </label>
                                    <input 
                                    value={this.state.password} onChange={this.handleChange}
                                    type="password" className="form-control" title="Please enter your password " name="password" placeholder="*******"/>
                                    <small>Your password</small>
                                </div>
                                <div>
                                    <button className="btn btn-accent" disabled={this.state.disableBtn}>Login</button>
                                    <a className="register" href="/register">Register</a>
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
    loginUserWithFirebase: LoginActions.loginUserWithFirebase
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);