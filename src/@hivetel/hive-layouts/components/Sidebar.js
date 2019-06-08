import React from 'react';
import '../style.css';

const Sidebar = props => {
    return(
        <nav>
            <ul className="nav luna-nav">
                <li className="nav-category">
                    Main
                </li>
                <li className="active">
                    <a href="/dashboard/app">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/"> Settings </a> 
                </li>
                <li className="nav-info">
                    <i className="material-icons ext-accent">perm_phone_msg</i>
                    <div className="m-t-xs">
                        <span className="c-white">Hivetel</span>
                        Special admin dashboard for monitoring call center activity
                    </div>

                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;