import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://min-api.cryptocompare.com'
});

class PriceApi {
  constructor() {
    this.path = '/data/price';
  }

  async getPriceCoin(coin) {
    try {
      const { data } = await instance.get(this.path + `?fsym=${coin}&tsyms=USD`);
      return data.USD;
    } catch (e) {
      return e;
    }
  }
}

export default new PriceApi();
