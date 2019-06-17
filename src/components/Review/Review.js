import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleClickSubmit = () => {
        console.log('taco');
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

export default connect(mapReduxStateToProps)(Support);
