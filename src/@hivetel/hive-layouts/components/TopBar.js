import React from 'react';
import '../style.css';

const TopBar = props => {
    return (
        <div className="navbar-collapse collapse" id="navbar">
            <div className="left-nav-toggle">
                <a href="#">
                    <i className="material-icons">menu</i>
                </a>
                <form className="navbar-form mr-auto">
                    <input type="text" className="form-control" placeholder="Search data for analysis " style={{width: 175}} />
                </form>

                <ul className="nav navbar-nav">
                    <li className="nav-item profil-link">
                        <a href="/">
                            <span className="profile-address">company@email.com</span>
                            <i className="material-icons">person</i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar;