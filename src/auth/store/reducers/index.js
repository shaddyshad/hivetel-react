import user from './user.reducers';
import {combineReducers} from 'redux';

const authReducers = combineReducers({
    user
});

export default authReducers;
