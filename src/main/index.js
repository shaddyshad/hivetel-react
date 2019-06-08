import React, {Component} from 'react';
import AppContext from '../AppContext';
import {renderRoutes} from 'react-router-config';

class MainApp extends Component{
    render(){
        const children = this.props;

        return(
            <AppContext.Consumer>
                {({routes}) => (
                    <div>
                        {renderRoutes(routes)}
                    </div>
                    
                )}
            </AppContext.Consumer>
        )
    }
}

export default MainApp;