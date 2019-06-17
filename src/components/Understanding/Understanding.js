import React, { Component } from 'react';
import { connect } from 'react-redux';

// declare understanding component which display on the feedback form
class Understanding extends Component {

    state = {
        understanding: '',
    }

    // when next is clicked, if the user did not select a value, display alert
    // if the user selects a value, route to support and dispatch the selection to 
    // understandingReducer
    handleClickNext = (event) => {

        if (this.state.understanding === '') {
            alert("Please select your understanding!");
        }
        else {
            this.props.history.push('/support');
            this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding });
        }
    }

    // update local state as the user makes a selection
    handleUnderstandingChange = (event) => {
        this.setState({
            understanding: event.target.value,
        })
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h2>How well do you understand the content?</h2>
                <label>
                    <p className="select-label">Understanding?</p>
                    <select onChange={this.handleUnderstandingChange}>
                        <option value={0}>Select</option>
                        <option value={1}>1 - I'm totally lost</option>
                        <option value={2}>2 - I'm somewhat lost</option>
                        <option value={3}>3 - I'm neither lost nor feeling like I've got this</option>
                        <option value={4}>4 - I'm somewhat feeling like I've got this</option>
                        <option value={5}>5 - I'm feeling like I've got this</option>
                    </select>
                    <button onClick={this.handleClickNext} className="next-button">Next</button>
                </label>
            </>
        );
    }
}

export default connect()(Understanding);
