import React, { Component } from 'react';
import { connect } from 'react-redux';

// declare Comments component where user enters comments
class Comments extends Component {

    // set local state to empty string
    state = {
        comments: '',
    }

    // on click dispatch comments to commentsReducer
    handleClickNext = () => {
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments });
    }

    // set the local state as user enters comments into input fields
    handleCommentInput = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }



    render() {
        return (
            <>
                <h2>Any comments you would like to leave?</h2>
                <label>
                    <p className="select-label">Comments</p>
                    <input className="comment-input" onChange={this.handleCommentInput}></input>
                    {/* ternary used to disable the next button after 4 clicks */}
                    {this.props.clickCountReducer < 4 ?
                        <button onClick={this.handleClickNext} className="next-button">Next</button> :
                        <button className="next-button-disabled">Next</button>
                    }
                </label>
            </>
        );
    }
}

// map redux state to props
const mapReduxStateToProps = (reduxState) => ({
    clickCountReducer: reduxState.clickCountReducer,
});

export default connect(mapReduxStateToProps)(Comments);
