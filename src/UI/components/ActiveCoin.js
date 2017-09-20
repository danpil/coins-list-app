import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCoin extends Component {
  state = {
    coin: null,
    price: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState({
        coin: this.props.coins[nextProps.active],
      });
    }

    if (nextProps.coins !== this.props.coins) {
      this.setState({
        coin: nextProps.coins[this.props.active],
      });
    }
  }

  render() {
    if (this.props.coins.length === 0) {
      return <h3>Nothing found :(</h3>;
    } else {
      return (
        <div className="thumbnail">
          <img src={`${this.props.url}${this.state.coin.ImageUrl}`} />

          <div className="thumbnail-caption">
            <h3>{this.state.coin.FullName}</h3>
            <table className="user-info table table-responsive">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{this.state.coin.Name}</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>{this.props.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default connect(state => ({
  coins: state.coins.data,
  url: state.coins.url,
  price: state.price.USD,
}))(ActiveCoin);
