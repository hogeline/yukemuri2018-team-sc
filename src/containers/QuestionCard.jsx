import React from "react";
import PropTypes from "prop-types";
import "./QuestionCard.css";

const QuestionCard = ({ question }) => (
  <div className="question">
    <div className="question-title">
      <a href={`https://teratail.com/questions/${question.id}`}>
        {question.title}
      </a>
    </div>
  </div>
);

QuestionCard.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

export default QuestionCard;
