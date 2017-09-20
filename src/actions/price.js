import PriceApi from './../utils/api/priceApi';

export const FETCH_PRICE = 'FETCH_PRICE';
export const FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS';
export const FETCH_PRICE_ERROR = 'FETCH_PRICE_ERROR';

export function fetchPriceCoin(coin) {
  return async dispatch => {
    dispatch({ type: FETCH_PRICE });

    try {
      const data = await PriceApi.getPriceCoin(coin);

      return dispatch({
        type: FETCH_PRICE_SUCCESS,
        data,
      });
    } catch (error) {
      return dispatch({
        type: FETCH_PRICE_ERROR,
        error,
      });
    }
  };
}
