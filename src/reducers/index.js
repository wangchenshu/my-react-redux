import {combineReducers} from 'redux';
import count from './count.reducers';
import user from './user.reducer';

export default combineReducers({
    count,
    user,
});
