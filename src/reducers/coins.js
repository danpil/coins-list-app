import {
  FETCH_COINS,
  FETCH_COINS_ERROR,
  FETCH_COINS_SUCCESS,
} from '../actions/coins';
import initialState from './initialState';

export default (state = initialState.coins, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return state;
    case FETCH_COINS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetched: true,
      };
    case FETCH_COINS_ERROR:
      return {
        ...state,
        error: action.error,
        isFetched: true,
      };
    default:
      return state;
  }
};
