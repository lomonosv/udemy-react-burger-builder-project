import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to="/"/>;

    if (this.props.ingredients) {
      summary = (
        <CheckoutSummary
          ingredients={ this.props.ingredients }
          checkoutCancelled={ this.checkoutCancelledHandler }
          checkoutContinued={ this.checkoutContinuedHandler } />
      );
    }

    return (
      <div>
        { summary }
        <Route
          path={ this.props.match.path + '/contact-data' }
          component={ ContactData } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  }
};

export default connect(mapStateToProps)(Checkout);
