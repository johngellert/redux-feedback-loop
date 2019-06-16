import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleClickSubmit = () => {

    }

    render() {
        return (
            <div className="review">
                <h2>Review you feedback!</h2>
                <div className="review-items">
                    <p>Feelings:</p>
                    <p>Understanding:</p>
                    <p>Support:</p>
                    <p>Comments:</p>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    feedbackReducer: reduxState.feedbackReducer,
})

export default connect(mapReduxStateToProps)(Support);
