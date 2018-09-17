import React, { Component } from "react";

import QuestionsList from "./QuestionsList";
import Header from "./Header"
// import { getQuestions } from "../apiutil/GetQuestions";
import dummy from "../dummy.json";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      questions: dummy["questions"]
    };
  }
  // エラーメッセージをsateにセットする
  setErrorMessage(message) {
    this.setState({ errorMessage: message });
  }

  // ReactのAPI処理はapiutilを参照
  /*
  componentDidMount() {
    getQuestions()
      .then(questions => {
        console.log(questions);
        this.setState({ questions });
      })
      .catch(() => {
        this.setErrorMessage("通信に失敗しました");
      });
  }
  */

  render() {
    return (
      <div className="search">
        <Header />
        <div className="search-conditions">
          <div className="search-conditions-title">条件</div>
          <div className="search-conditions-level">Easy</div>
          <div className="search-conditions-tag">Python</div>
        </div>
        <div className="errormessage">
          <h1>{this.state.errorMessage}</h1>
        </div>
        <QuestionsList questions={this.state.questions} />
      </div>
    );
  }
}

export default Search;
