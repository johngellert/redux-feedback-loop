import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// import all components to see on the feedback form
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support'
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class FeedbackForm extends Component {

    render() {
        return (
            <Router>
                <div className="question-container">
                    {/* display the corresponding route on the feedback form */}
                        <Route path="/" exact component={Feelings}></Route>
                        <Route path="/understanding" exact component={Understanding}></Route>
                        <Route path="/support" exact component={Support}></Route>
                        <Route path="/comments" exact component={Comments}></Route>
                        <Review />
                </div>
            </Router>
        );
    }
}

export default FeedbackForm;
