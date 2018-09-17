import React from "react";
import PropTypes from "prop-types";
import "./QuestionsList.css"

import QuestionCard from "./QuestionCard";

const QuestionsList = questions => (
  <div className="questions">
    <div className="questions-container">
      {console.log(questions["questions"])}
      {questions["questions"].map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  </div>
);

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any)
};

QuestionsList.defaultProps = {
  questions: []
};

export default QuestionsList;
