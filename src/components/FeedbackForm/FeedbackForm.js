import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support'

class FeedbackForm extends Component {

    state = {
        feelings: false,
        understanding: false,
        support: false,
    }

    handleClickNext = () => {

    }

    feelings = () => console.log("feelings");
    understanding = () => console.log("understanding");
    support = () => console.log("support");

    render() {
        return (
            <Router>
                <div className="question-container">
                    <Route path="/" exact component={Feelings}></Route>
                    <Route path="/understanding" exact component={Understanding}></Route>
                    <Route path="/support" exact component={Support}></Route>
                    <br />

                    <button className="next-button">Next</button>

                    {this.state.feelings
                        ? this.feelings()
                        : this.state.understanding
                            ? this.understanding()
                            : this.support()
                    }
                </div>
            </Router>
        );
    }
}

export default FeedbackForm;
