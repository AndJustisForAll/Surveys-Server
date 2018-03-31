import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Payments from './Payments'; // eslint-disable-line no-unused-vars

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li key="h_payment"><Payments /></li>,
                    <li key="h_credits"><span>Credits: {this.props.auth.credits}</span></li>,
                    <li key="h_logout"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return <nav>
            <div className="nav-wrapper">
                <Link className="left brand-logo" to={this.props.auth ? '/surveys':'/'}>Emaily</Link>
                <ul id="nav-mobile" className="right">
                    {
                        this.renderContent()
                    }
                </ul>
            </div>
        </nav>;
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Header);
