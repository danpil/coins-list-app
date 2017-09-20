import { combineReducers } from 'redux';
import coins from './coins'
//import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  coins,
  //form: formReducer,
});
