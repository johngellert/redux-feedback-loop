import React, { Component } from 'react';

class Support extends Component {



    render() {

        return (
            <div>
                <h2>Submission successful!</h2>
                <div className="thank-you">
                    Thank you for your feedback!
                    <button onclick={this.handleLeaveNewFeedback}>Leave New Feedback</button>
                </div>
            </div>
        );
    }
}

export default Support;