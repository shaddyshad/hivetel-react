import React from 'react';

const NotFound = props => {
    return(
        <section className="content">
            <div className="container-center md animated slideInDown">
                <div className="view-header">
                    <div className="header-icon">
                        <i className="material-icons">error_outline</i>
                    </div>
                    <div className="header-title">
                        <h4> 404</h4>
                        <small>Not Found</small>
                    </div>
                </div>
                <div className="panel panel-filled">
                    <div className="panel-body">
                    Sorry, but the page you are looking for has not been found. 
                    Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.
                    </div>
                </div>
                <div>
                    <a className="btn btn-accent" href='/'>Back home</a>
                </div>

            </div>
        </section>
    )
}

export default NotFound;