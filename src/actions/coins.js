import CoinsApi from './../utils/api/coinsApi';
import PriceApi from './../utils/api/priceApi';

export const FETCH_COINS = 'FETCH_COINS';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'FETCH_COINS_ERROR';

// export const FETCH_PRICE = 'FETCH_PRICE';
// export const FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS';
// export const FETCH_PRICE_ERROR = 'FETCH_PRICE_ERROR';

export function fetchCoins() {
  return async dispatch => {
    dispatch({ type: FETCH_COINS });

    try {
      const data = await CoinsApi.getAllCoins();
      //debugger;

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
