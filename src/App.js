import React, {Component} from 'react';
import AppContext from './AppContext';
import Auth from './auth/components/Auth';
import HiveLayout from './@hivetel/hive-layouts'
import history from './history';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import routes from './@hivetel/config/routes-config';
import MainApp from './main'

class App extends Component{
  render(){
    return(
      <AppContext.Provider value={{routes}}>
        <Provider store={store}>
          <Auth>
            <Router history={history}>
                <MainApp />
            </Router>
          </Auth>
            
        </Provider>
      </AppContext.Provider>
    )
  }
}

export default App;
