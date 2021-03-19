import { combineReducers } from 'redux';
import classesReducer from '../reducers/classesReducer';
import shopReducer from '../reducers/shopReducer';

const rootReducer = combineReducers({
  classes: classesReducer,
  shop: shopReducer,
});

export default rootReducer;
