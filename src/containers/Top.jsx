import React, { Component } from "react";
import "./Top.css";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "",
      tag: "",
      errorMessage: ""
    };
  }

  setErrorMessage(message) {
    this.setState({ errorMessage: message });
  }

  handleOnChangeLevel(e) {
    this.setState({ level: e.target.value });
  }

  handleOnChangeTag(e) {
    this.setState({ tag: e.target.value });
  }

  handleOnClickedSearch(history) {
    if (this.state.tag == "" || this.state.level == "") {
      this.setState({ errorMessage: "レベルとタグを選択してください" });
      return;
    }
    history.push(`/questions?level=${this.state.level}&?tag=${this.state.tag}`);
  }

  render() {
    const history = this.props.history;
    return (
      <div className="top">
        <div className="top-landing">
          <div className="top-landing-logo">ロゴ</div>
          <div className="top-landing-title">
            <h1>
              スキルレベルに合った
              <span>質問を探す</span>
            </h1>
          </div>
          <div className="top-landing-source">
            <div className="top-landing-detail">
              rankedtailはご希望の質問を
              <span className="top-landing-detail-Emph1">的確に抽出し、</span>
              <br />
              あなたのスキルアップに
              <span className="top-landing-detail-Emph2">貢献します。</span>
            </div>
            <h2>For Teratail</h2>
          </div>
        </div>
        <div className="top-search">
          <div className="top-search-title">
            <h2>検索条件</h2>
          </div>
          <div className="container">
            <div className="top-search-conditions">
              <form action="" method="post">
                質問レベル
                <br />
                <div className="top-search-levels">
                  <input
                    type="radio"
                    name="level"
                    value="beginner"
                    onChange={e => this.handleOnChangeLevel(e)}
                  />
                  ビギナー
                  <input
                    type="radio"
                    name="level"
                    value="normal"
                    onChange={e => this.handleOnChangeLevel(e)}
                  />
                  ノーマル
                  <input
                    type="radio"
                    name="level"
                    value="expert"
                    onChange={e => this.handleOnChangeLevel(e)}
                  />
                  エキスパート
                </div>
                <br />
                絞り込みタグ
                <br />
                <div className="top-search-tags">
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="CakePHP"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    CakePHP
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Laravel"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Laravel
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Perl"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Perl
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="AngularJS"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    AngularJS
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Oracle"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Oracle
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Eclipse"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Eclipse
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Apache"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Apache
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="CentOS"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    CentOS
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Struts"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Struts
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Vim"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Vim
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Python"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Python
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Swift"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Swift
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="CSS3"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    CSS3
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="nginx"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    nginx
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="tag"
                      value="Linux"
                      onChange={e => this.handleOnChangeTag(e)}
                    />
                    Linux
                  </div>
                </div>
              </form>
            </div>
            <div className="validation">
              <p>{this.state.errorMessage}</p>
            </div>
            <div
              className="top-search-btn"
              onClick={() => this.handleOnClickedSearch(history)}
            >
              検索
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
