import React, { Component } from 'react';


class Support extends Component {
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
                </label>
            </>
        );
    }
}

export default Support;
