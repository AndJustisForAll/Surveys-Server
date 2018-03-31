import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter, Route } from 'react-router-dom';  // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';  // eslint-disable-line no-unused-vars
import Landing from './Landing';
import Dashboard from './Dashboard';
import NewSurveyForm from './surveys/NewSurveyForm';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={NewSurveyForm} />
                </div> 
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);
