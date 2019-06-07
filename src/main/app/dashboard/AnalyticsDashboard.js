import React, {Component} from 'react';
import HiveAnimate from '../../../@hivetel/components/HiveAnimation/HiveAnimation';
import {connect} from 'react-redux';
import QuickStats from './widgets/QuickStats';
import Datatable from './widgets/Datatable';

class AnalyticsDashboard extends Component{
    render(){
        const {inbound, outbound, rejected} = this.props;
        <div className="container">
            <HiveAnimate animation="transitions.slideInUp" delay="200">
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

                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Datatable data={sessions} />
                    </div>
                </div>
            </HiveAnimate>
            
        </div>
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