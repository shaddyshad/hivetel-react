import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class Datatable extends Component{
    getDate = timestamp => {
        // If today, return "hh:mm am/pm" if not return "dd June 2019 hh:mm am/pm"
        const today = new moment();

        const time = moment(timestamp);

        if( today.diff(time, 'days')){
            // Not today 
            return time.format("DD MMM YY HH:mm a");
        }

        return time.format("HH:mm a");
    }
    renderDataTable = data => {
        return data.map( ({timestamp, callerNumber, direction, sessionId, agentName}) => (
            <tr>
                <td> {this.getDate(timestamp)}</td>
                <td> {callerNumber}</td>
                <td> {direction} </td>
                <td> {agentName }</td>
                <td> 
                    <a className="btn btn-default btn-xs" href="#"> View </a>
                </td>
            </tr>
    ))
    
    }
    render(){
        const {data} = this.props;

        return(
            <div className="panel panel-filled">
                <div className="panel-body">
                    <table className="table table-responsive-sm">
                        <thead>
                            <tr>
                                <th> Time </th>
                                <th> Caller phone</th>
                                <th> Direction</th>
                                <th> Agent </th>
                                <th> Action </th>
                            </tr>
                        </thead> 
                        <tbody>
                            { this.renderDataTable()}
                        </tbody> 
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.sessions
});

export default connect(mapStateToProps)(Datatable);