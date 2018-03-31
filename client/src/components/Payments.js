import React, { Component } from 'react';  // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'; // eslint-disable-line no-unused-vars
import * as actions from './../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Emaily"
                description="$5 for 500 credits"
                amount={500} 
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
