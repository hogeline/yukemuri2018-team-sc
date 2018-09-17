import React from "react";
import PropTypes from "prop-types";
import "./QuestionsList.css"

import QuestionCard from "./QuestionCard";

const QuestionsList = ({questions, level}) => (
  <div className="questions">
    <div className="questions-container">
      {questions["questions"].map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  </div>
);

QuestionsList.propTypes = {
  level: PropTypes.any,
  questions: PropTypes.any
};

QuestionsList.defaultProps = {
  questions: []
};

export default QuestionsList;
