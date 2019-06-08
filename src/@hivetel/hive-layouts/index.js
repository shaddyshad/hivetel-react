import React, {Component} from 'react';
import HivetelHeader from './components/HivetelHeader';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';

import './style.css';

class Layout extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="navbar navbar-expand-md navbar-default fixed-top">
                    <HivetelHeader />
                    <TopBar />
                </div>
                <aside className="navigation">
                    <Sidebar />
                </aside>
            </div>
            
        )
    }
}

export default Layout;