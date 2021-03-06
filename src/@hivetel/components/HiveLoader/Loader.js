import React from 'react';
import loader from './assets/ripple.svg';
import './assets/style.css';

const Loader = (props) => {
    if( props.error ){
        return(
            <div className="container-comp">
                <i className="text-40 mb-16 material-icons color-action">error_outline</i>
                <p className="text-20 text-secondary">
                    Something went wrong
                </p>
                <button className="btn btn-w-md btn-warning" onClick={props.retry}>Retry</button>
            </div>
        )
    } else if( props.timedOut){
        return (
            <div className="container-comp">
            <i className="text-40 mb-16 material-icons color-action">sentiment_disatisfied</i>
            <p className="text-20 text-secondary">
                Taking a long time...
            </p>
            <button className="btn btn-w-md btn-warning" onClick={props.retry}>Retry</button>
        </div>
        )
    }else if( props.pastDelay ){
        return (
            <div className="container-comp">
            <p className="text-20 text-secondary">
                Loading...
            </p>
            <img src={loader} />
        </div>
        )
    }else{
        return null;
    }
}

export default Loader;