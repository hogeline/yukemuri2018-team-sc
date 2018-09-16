import React from "react";
import ReactDOM from "react-dom";
import QuestionCard from "./QuestionCard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<QuestionCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
