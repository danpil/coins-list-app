import React from 'react';
import { connect } from 'react-redux';
import CoinData from './CoinData';

const CoinList = props => {
  if (props.coins.length === 0) {
    return <p>Loading...</p>;
  }

  const coins = props.coins.map((coin, index) => {
    return <CoinData coin={coin} key={`user-${index}`} index={index} update={props.update} />;
  });

  return (
    <table className="user-list table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>{coins}</tbody>
    </table>
  );
};

export default connect(state => ({
  coins: state.coins.data,
}))(CoinList);
