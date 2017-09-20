import { combineReducers } from 'redux';
import coins from './coins';
import price from './price';

export default combineReducers({
  coins,
  price,
});
