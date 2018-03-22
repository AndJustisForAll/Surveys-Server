import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';
import {
    connect
} from 'react-redux';
import * as actions from '../actions';
import moment from 'moment';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    render() {
        const surveys = this.props.surveys || [];
        return <div>
                    <ul className="collection">
                        {surveys.map((survey, i) => {
                           return <li className="collection-item avatar" key={i}>
                                    <i className="material-icons circle">assignment</i>
                                    <span className="title">{survey.title}</span>
                                    <p>Yes: {survey.yes}</p>
                                    <p>No: {survey.no}</p>
                                    <span className="secondary-content">Sent: {moment(survey.dateSent).format('MMMM DD YYYY, h:mm:ss a')}</span>
                                </li>
                        })}  
                    </ul>
                    <div className='fixed-action-btn'>
                        <Link to="/surveys/new" className="btn-floating btn-large red" >
                            <i className="large material-icons">+</i>
                        </Link> 
                    </div> 
               </div>
    }
}

function mapStateToProps(state) {
    // {surveys.map((survey, i) => <li key={i}>{survey.subject}</li>)}  
    return {
        surveys: state.surveys
    }
}

export default connect(mapStateToProps, actions)(Dashboard);
