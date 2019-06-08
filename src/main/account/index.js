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
        if( !this.props.accountData || !this.props.accountData.uid){
            return null;
        }
        return(
            <React.Fragment>
                {...this.props.children}
            </React.Fragment>

            
        )
    }
 }


 function mapDispatchToProps(dispatch){
     return bindActionCreators({
         setAccountData: Actions.setAccountData
     }, dispatch);
 }

 function mapStateToProps(state){
     return {
         accountData: state.accountData
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Account);