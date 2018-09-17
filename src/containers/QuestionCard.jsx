import React from "react";
import PropTypes from "prop-types";
import "./QuestionCard.css";

const QuestionCard = ({ question }) => (
  <div className="question">
    <div className="question-title">
      <a href="/">{question.title}</a>
    </div>
  </div>
);

QuestionCard.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default QuestionCard;
