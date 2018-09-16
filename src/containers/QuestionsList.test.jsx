import React from "react";
import ReactDOM from "react-dom";
import QuestionsList from "./QuestionsList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<QuestionsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
