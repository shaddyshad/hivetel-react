import React,{Component} from 'react';
import moment from 'moment';
import './style.css';

class QuickStats extends Component{
    getTime = timeStamp => {
        return moment(timeStamp).format("HH:mm a");
    }

    render(){
        const {figure, lastUpdated, statName, iconName} = props.data;
        return(
            <div className="panel panel-filled">
                <div className="panel-body">
                    <h2 className="m-b-none">
                        {figure}
                        <span className="slight">
                            <i className="material-icons">{iconName}</i>
                        </span>
                    </h2>
                    <div className="small">
                        {statName}
                    </div>
                    <div className="slight m-t-sm">
                        <i className="material-icons">access_time</i>
                        Updated: 
                        <span className="c-white">
                            {this.getTime(lastUpdated)}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickStats;