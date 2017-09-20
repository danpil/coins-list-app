import React from 'react';
import { connect } from 'react-redux';

const CoinData = ({ coin, update, index, url }) => {
  return (
    <tr onClick={() => update({ active: index })}>
      <td>
        <img src={url + coin.ImageUrl} className="user-image" />
      </td>
      <td>{coin.Id}</td>
      <td>{coin.Name}</td>
    </tr>
  );
};

export default connect(state => ({
  url: state.coins.url,
}))(CoinData);
