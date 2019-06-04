import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @author
 * @class QuizEnd
 **/

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetHandlerClick();
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href="" onClick={this.handleResetClick.bind(this)}>
          Reset Quiz
        </a>
      </div>
    );
  }
}

export default QuizEnd;
