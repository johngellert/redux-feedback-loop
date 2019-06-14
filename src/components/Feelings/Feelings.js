import React, { Component } from 'react';


class Feelings extends Component {
    render() {
        return (
            <>
                <div className="question-container">
                    <h2>How are you feeling today?</h2>
                    <label>
                        <p className="select-label">Feeling?</p>
                        <select>
                            <option value="1">1 - I'm very stressed</option>
                            <option value="2">2 - I'm somewhat stressed</option>
                            <option value="3">3 - I'm not neither stressed nor feeling great stress</option>
                            <option value="4">4 - I'm somewhat feeling great</option>
                            <option value="5">5 - I'm feeling great</option>
                        </select>
                    </label>

                    <br />
                    <button className="next-button">Next</button>
                </div>
            </>
        );
    }
}

export default Feelings;
