import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

    state = {
        comments: '',
    }

    handleClickNext = () => {
        // this.props.history.push('/comments');
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments });
    }

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
                    <input onChange={this.handleCommentInput}></input>
                    <button onClick={this.handleClickNext} className="next-button">Next</button>
                </label>
            </>
        );
    }
}

export default connect()(Comments);
