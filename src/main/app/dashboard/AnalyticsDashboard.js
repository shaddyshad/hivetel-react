import React, {Component} from 'react';
import HiveAnimate from '../../../@hivetel/components/HiveAnimation/HiveAnimation';
import {connect} from 'react-redux';

class AnalyticsDashboard extends Component{
    render(){
        <div className="container">
            <HiveAnimate animation="transitions.slideInUp" delay="200">
                <div className="row">
                    <div className="col-lg-2 col-xs-12">
                        <Component data={inbound} />
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">

                </div>
            </HiveAnimate>
            
        </div>
    }
}

const mapStateToProps = state => ({
    inbound: state.stats.inbound,
    outbound: state.stats.outbound
});

export default connect(mapStateToProps)(AnalyticsDashboard);