import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    handleClickNext = (event) => {
        this.props.history.push('/comments');
        this.props.dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    render() {
        return (
            <>
                <h2>How well are you being supported?</h2>
                <label>
                    <p className="select-label">Support?</p>
                    <select>
                        <option value="1">1 - I'm feeling abandoned</option>
                        <option value="2">2 - I'm somewhat feeling abandoned</option>
                        <option value="3">3 - I'm feeling neither abandoned nor supported</option>
                        <option value="4">4 - I'm somewhat feeling supported</option>
                        <option value="5">5 - I'm feeling supported</option>
                    </select>
                    <button onClick={this.handleClickNext} className="next-button">Next</button>
                </label>
            </>
        );
    }
}

export default connect()(Support);
