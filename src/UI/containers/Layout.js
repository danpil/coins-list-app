import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from './../../actions/coins';
import { fetchPriceCoin } from './../../actions/price';
import CoinList from './../components/CoinList';
import ActiveCoin from './../components/ActiveCoin';

class Layout extends Component {
  state = {
    active: 0,
  };

  componentDidMount() {
    if (this.props.coins.length === 0) {
      this.props.fetchCoins();
    }

    console.log(this.props.coins.data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.couns !== this.props.coins) {
      this.props.fetchPriceCoin(nextProps.coins[this.state.active].Name);
    }
  }

  updateData = config => {
    console.log(this.props.coins);

    console.log(this.state.active);
    console.log('---------------------------------------------------');
    console.log(this.props.coins[this.state.active]);
    this.setState(config);
    this.props.fetchPriceCoin(this.props.coins[this.state.active].Name);
  };

  render() {
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
          <ActiveCoin active={this.state.active}  />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <CoinList update={this.updateData} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    coins: state.coins.data,
  }),
  { fetchCoins, fetchPriceCoin },
)(Layout);
