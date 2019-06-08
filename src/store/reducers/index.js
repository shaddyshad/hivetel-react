import {combineReducers} from 'redux';
import auth from '../../auth/store/reducers/index';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        ...asyncReducers
    });

export default createReducer;
