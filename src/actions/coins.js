
import CoinsApi from './../utils/api/coinsApi';

export const FETCH_COINS = 'FETCH_COINS';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'FETCH_COINS_ERROR';

export function fetchBooks() {
  return async dispatch => {
    dispatch({ type: FETCH_COINS });

    try {
      const data = await CoinsApi.getAllCoins();

      return dispatch({
        type: FETCH_COINS_SUCCESS,
        data,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_COINS_ERROR,
        error,
      });
    }
  };
}

