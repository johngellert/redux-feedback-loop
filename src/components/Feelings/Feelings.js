import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feelings extends Component {

    state = {
        feelings: '',
    }

    handleClickNext = () => {
        if (this.state.feelings === '') {
            alert("Please select how you are feeling!");
        }
        else {
            this.props.history.push('/understanding');
            this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feelings });
        }
    }

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
                        <option value="0">Select</option>
                        <option value="1">1 - I'm very stressed</option>
                        <option value="2">2 - I'm somewhat stressed</option>
                        <option value="3">3 - I'm neither stressed nor feeling great</option>
                        <option value="4">4 - I'm somewhat feeling great</option>
                        <option value="5">5 - I'm feeling great</option>
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
