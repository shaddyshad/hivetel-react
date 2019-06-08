import React from 'react';
import '../style.css';

const HivetelHeader = props => {
    return (
        <div className="navbar-header">
            <div id="mobile-menu">
                <div className="left-nav-toggle">
                    <a href="#">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </div>
            <a className="navbar-brand" href="/dashboard/app">
                Hivetel 
                <span>v 1.0.0</span>
            </a>
        </div>
    )
}

export default HivetelHeader;