import React, { Component } from "react";
import queryString from "query-string";

import QuestionsList from "./QuestionsList";
// import { getQuestions } from "../apiutil/GetQuestions";
import dummy from "../dummy.json";
import laravel from "../laravel.json";
import nginx from "../nginx.json";
import python from "../python.json";
import swift from "../swift.json";
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
    var questions = null;
    var level = null;
    if(queryString.parse(this.props.location.search).tag === "nginx"){
      questions = nginx;
    }else if(queryString.parse(this.props.location.search).tag === "laravel"){
      questions = laravel;
    }else if(queryString.parse(this.props.location.search).tag === "python"){
      questions = python;
    }else if(queryString.parse(this.props.location.search).tag === "swift"){
      questions = swift;
    }
    level = queryString.parse(this.props.location.search).level;

    return (
      <div className="search">
        <header className="search-header">
          <h3 className="search-header-logo">search page</h3>
        </header>
        <div className="search-conditions">
          <div className="search-conditions-title">条件</div>
          <div className="search-conditions-level">Easy</div>
          <div className="search-conditions-tag">Python</div>
        </div>
        <div className="errormessage">
          <h1>{this.state.errorMessage}</h1>
        </div>
        <QuestionsList level={level} questions={questions} />
      </div>
    );
  }
}

export default Search;
