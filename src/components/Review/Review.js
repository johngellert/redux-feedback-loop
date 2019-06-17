import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// this component is display and updated throughout the feedback input process
class Review extends Component {

    // handle the submit click
    handleClickSubmit = () => {
        // update the submitReducer from false to true
        // changes the render in FeedbackForm to render the Success page instead of the FeedbackForm
        // In not a fan of this here, but I was struggling with routing. 
        this.props.dispatch({ type: 'SUBMIT', payload: true })

        // sends a POST request to the server to hold the feedback instance in the database
        axios({
            method: 'POST',
            url: '/submit',
            // data is an object with the reducers current state
            // sent to the server
            data: {
                feelings: this.props.reduxState.feelingsReducer,
                understanding: this.props.reduxState.understandingReducer,
                support: this.props.reduxState.supportReducer,
                comments: this.props.reduxState.commentsReducer,
            }
        }).then(() => {
            // after the POST is created, reset all the reducers
            this.props.dispatch({ type: 'SET_FEELINGS', payload: 0 });
            this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: 0 });
            this.props.dispatch({ type: 'SET_SUPPORT', payload: 0 });
            this.props.dispatch({ type: 'SET_COMMENTS', payload: "" });
            this.props.dispatch({ type: 'RESET_COUNT', payload: 0 });
        });
    }

    render() {
        return (
            <div className="review">
                <h2>Review you feedback!</h2>
                <div className="review-items">
                    <p>Feelings: {this.props.reduxState.feelingsReducer}</p>
                    <p>Understanding: {this.props.reduxState.understandingReducer}</p>
                    <p>Support: {this.props.reduxState.supportReducer}</p>
                    <p>Comments: {this.props.reduxState.commentsReducer}</p>
                    {/* based on the clickCounterReducer, this enables the submit button */}
                    {this.props.reduxState.clickCountReducer < 4 ?
                        <button className="submit-button-disabled">Submit Feedback!</button> :
                        <button className="submit-button" onClick={this.handleClickSubmit}>Submit Feedback!</button>
                    }
                </div>
            </div>
        );
    }
}

// access the redux store
const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
});

export default connect(mapReduxStateToProps)(Review);
