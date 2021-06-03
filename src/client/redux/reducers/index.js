import { combineReducers } from 'redux';
import users from './users';
import ageDemographic from './ageDemographic'

export default combineReducers({ users, ageDemographic });
