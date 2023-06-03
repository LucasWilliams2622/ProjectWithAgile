import { combineReducers } from 'redux';
import appReducer from './appReducer';
import demoReducer from './demoReducer';


// file rootReducer will combine all reducer that have declared
export default rootReducer = combineReducers({
    appReducer,
    demoReducer,

});