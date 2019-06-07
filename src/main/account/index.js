/**
 * Parent component for authenticated user 
 */

 import React, {Component} from 'react';
 import {bindActionCreators} from 'redux';
 import {connect} from 'redux';
 import * as Actions from './store';
 

 class Account extends Component{
    componentDidMount(){
        this.props.setAccountData()
    }
    render(){
        return(
            <React.Fragment>{ ...children }</React.Fragment>
        )
    }
 }


 function mapDispatchToProps(dispatch){
     return bindActionCreators({
         setAccountData: Actions.setAccountData
     }, dispatch);
 }

 export default connect(mapDispatchToProps)(Account);