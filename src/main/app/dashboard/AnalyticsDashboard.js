import React, {Component} from 'react';
import HiveAnimate from '../../../@hivetel/components/HiveAnimation/HiveAnimation';
import {connect} from 'react-redux';
import QuickStats from './widgets/QuickStats';
import Datatable from './widgets/Datatable';
import './style.css';

class AnalyticsDashboard extends Component{
    render(){
        const {inbound, outbound, rejected, talkTime, sessions} = this.props;

        return(
            <div className="container">
            <HiveAnimate animation="transitions.slideInUp" delay="200">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="view-header">
                            <div className="pull-right text-right" style={{lineHeight: 14}}>
                                <small>
                                    Hivetel Admin 
                                    <br/>
                                    Dashboard 
                                    <br />
                                    <span className="c-white">v 1.0</span>
                                </small>
                            </div>
                            <div className="header-icon">
                                <i className="material-icons">perm_phone_msg</i>
                            </div>
                            <div className="header-title">
                                <h3 className="m-b-xs">
                                    Hivetel Call center Admin
                                </h3>
                                <small> Special admin dashboard for call center monitoring and configurations</small>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-xs-12">
                        <QuickStats data={inbound} />
                    </div>
                    <div className="col-lg-2 col-xs-12">
                        <QuickStats data={outbound} />
                    </div>
                    <div className="col-lg-2 col-xs-12">
                        <QuickStats data={rejected} />
                    </div>
                    <div className="col-lg-2 col-xs-12">
                        <QuickStats data={talkTime} />
                    </div>
                </div>
                <div className="row">
                    <p>Here goes the graphs</p>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Datatable data={sessions} />
                    </div>
                </div>
            </HiveAnimate>
            
        </div>
        )
    }
}

const mapStateToProps = state => ({
    inbound: state.stats.inbound,
    outbound: state.stats.outbound,
    talkTime: state.stats.talkTime,
    rejected: state.stats.rejected,
    sessions: state.sessions
});

export default connect(mapStateToProps)(AnalyticsDashboard);