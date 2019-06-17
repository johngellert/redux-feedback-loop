import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    // go back to the feelings page and start over
    handleLeaveNewFeedback = () => {
        this.props.history.push('/');
        
        this.props.dispatch( {type: 'SUBMIT_FALSE', payload: false });
    }

    render() {
        return (

                <div>
                    <h2>Submission successful!</h2>
                    <div className="thank-you">
                        Thank you for your feedback!
                    <button className="start-over-button" onClick={this.handleLeaveNewFeedback}>Leave New Feedback</button>
                    </div>
                </div>
                
        );
    }
}

export default connect()(Support);