import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @author
 * @class QuizEnd
 **/

class QuizEnd extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href="">Reset Quiz</a>
      </div>
    );
  }
}

QuizEnd.propTypes = {};
export default QuizEnd;
