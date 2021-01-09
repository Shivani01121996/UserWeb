import userReducer from './user.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    users: userReducer
});

export default allReducers; 
