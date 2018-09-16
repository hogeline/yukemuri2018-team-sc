import React, { Component } from "react";

import QuestionsList from "./QuestionsList";
import { getQuestions } from "../apiutil/GetQuestions";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ""
    };
  }
  // エラーメッセージをsateにセットする
  setErrorMessage(message) {
    this.setState({ errorMessage: message });
  }

  // ReactのAPI処理はapiutilを参照
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

  render() {
    return (
      <div className="search">
        <header className="search-header">
          <h3 className="search-header-logo">search page</h3>
        </header>
        <div className="search-conditions">
          <h1>検索条件</h1>
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
