import React, { Component } from 'react';


class Feelings extends Component {

    handleClickNext = () => {
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <>
                <h2>How are you feeling today?</h2>
                <label>
                    <p className="select-label">Feeling?</p>
                    <select>
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

export default Feelings;
