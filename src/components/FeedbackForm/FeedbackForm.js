import React, { Component } from 'react';
import Feelings from '../Feelings/Feelings';



class FeedbackForm extends Component {


    render() {
        return (
            <>
                <div className="question-container">
                    <Feelings />
                    <Understanding />
                    <button className="next-button">Next</button>
                </div>
            </>
        );
    }
}

export default FeedbackForm;
