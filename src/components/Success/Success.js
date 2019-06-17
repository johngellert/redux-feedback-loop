import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import Feelings from '../Feelings/Feelings';

class Support extends Component {

    // go back to the feelings page and start over
    handleLeaveNewFeedback = () => {
        this.props.history.push('/');;
    }

    render() {

        return (

                <div>
                    <h2>Submission successful!</h2>
                    <div className="thank-you">
                        Thank you for your feedback!
                    <button className="start-over-button" onclick={this.handleLeaveNewFeedback}>Leave New Feedback</button>
                    </div>
                </div>
                
        );
    }
}

export default Support;