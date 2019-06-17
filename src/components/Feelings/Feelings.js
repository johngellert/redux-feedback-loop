import React, { Component } from 'react';
import { connect } from 'react-redux';

// declare feelings component which display on the feedback form
class Feelings extends Component {

    // local state to store the feeling selection
    state = {
        feelings: '',
    }

    // when next is clicked, if the user did not select a value, display alert
    // if the user selects a value, route to feelings and dispatch the selection to 
    // understandingReducer
    handleClickNext = () => {
        if (this.state.feelings === '') {
            alert("Please select how you are feeling!");
        }
        else {
            this.props.history.push('/understanding');
            this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feelings });
        }
    }

    // update local state feelings as the user make a selection
    handleFeelingsChange = (event) => {
        this.setState({
            feelings: event.target.value,
        })
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h2>How are you feeling today?</h2>
                <label>
                    <p className="select-label">Feeling?</p>
                    <select className="select" onChange={this.handleFeelingsChange}>
                        <option value={0}>Select</option>
                        <option value={1}>1 - I'm very stressed</option>
                        <option value={2}>2 - I'm somewhat stressed</option>
                        <option value={3}>3 - I'm neither stressed nor feeling great</option>
                        <option value={4}>4 - I'm somewhat feeling great</option>
                        <option value={5}>5 - I'm feeling great</option>
                    </select>
                    <button onClick={this.handleClickNext} className="next-button">Next</button>
                </label>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    feelingsReducer: reduxState.feelingsReducer,
})

export default connect(mapReduxStateToProps)(Feelings);
