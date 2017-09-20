import axios from 'axios';

axios.defaults.baseURL = 'https://www.cryptocompare.com';

class CoinsApi {
  constructor() {
    this.path = '/api/data/coinlist/';
  }

  async getAllCoins() {
    try {
      const { data } = await axios.get(this.path);
      return Object.values(data.Data).slice(0, 20);
    } catch (e) {
      debugger;
      return e;
    }
  }
}

export default new CoinsApi();
