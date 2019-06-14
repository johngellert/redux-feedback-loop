import React, { Component } from 'react';


class Understanding extends Component {
    render() {
        return (
            <>
                <div className="question-container">
                    <h2>How well do you understand the content?</h2>
                    <label>
                        <p className="select-label">Understanding?</p>
                        <select>
                            <option value="1">1 - I'm totally lost</option>
                            <option value="2">2 - I'm somewhat lost</option>
                            <option value="3">3 - I'm neither lost nor feeling like I've got this</option>
                            <option value="4">4 - I'm somewhat feeling like I've got this</option>
                            <option value="5">5 - I'm feeling like I've got this</option>
                        </select>
                    </label>

                    <br />
                </div>
            </>
        );
    }
}

export default Understanding;
