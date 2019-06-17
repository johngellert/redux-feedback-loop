import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleClickSubmit = () => {
        this.props.dispatch({ type: 'SUBMIT', payload: true })

        axios({
            method: 'POST',
            url: '/submit',
            data: {
                feelings: this.props.reduxState.feelingsReducer,
                understanding: this.props.reduxState.understandingReducer,
                support: this.props.reduxState.supportReducer,
                comments: this.props.reduxState.commentsReducer,
            }
        }).then(() => {
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
                    {this.props.reduxState.clickCountReducer < 4 ?
                        <button className="submit-button-disabled">Submit Feedback!</button> :
                        <button className="submit-button" onClick={this.handleClickSubmit}>Submit Feedback!</button>
                    }
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
});

export default connect(mapReduxStateToProps)(Review);
