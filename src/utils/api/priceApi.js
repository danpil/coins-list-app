import axios from 'axios';

axios.defaults.baseURL = 'https://min-api.cryptocompare.com';

class PriceApi {
  constructor() {
    this.path = '/data/price/';
  }

  async getPriceCoin(coin) {
    try {
      const { data } = await axios.get(this.path + `?fsym=${coin}&tsyms=USD`);
      return data;
    } catch (e) {
      return e;
    }
  }
}

export default new PriceApi();
