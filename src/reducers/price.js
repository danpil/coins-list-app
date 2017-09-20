import { FETCH_PRICE, FETCH_PRICE_SUCCESS, FETCH_PRICE_ERROR } from '../actions/price';
import initialState from './initialState';

export default (state = initialState.price, action) => {
  switch (action.type) {
    case FETCH_PRICE:
      return {
        ...state,
        USD: null,
        error: null,
      };
    case FETCH_PRICE_SUCCESS:
      //debugger;
      return {
        ...state,
        USD: action.data,
        isFetched: true,
      };
    case FETCH_PRICE_ERROR:
      return {
        ...state,
        error: action.error,
        isFetched: true,
      };
    default:
      return state;
  }
};
