import React, { Component } from "react";
import "./Top.css";

class Top extends Component {
  render() {
    return (
      <div className="top">
        <div className="top-landing">
          <div className="top-landing-logo">ロゴ</div>
          <div className="top-landing-title">
            <h1>
              自分のスキルに
              <br />
              合った質問を探す
            </h1>
          </div>
          <div className="top-landing-source">
            <h2>For Teratail</h2>
          </div>
        </div>
        <div className="top-search">
          <div className="top-search-title">
            <h2>検索条件</h2>
          </div>
          <div className="container">
            <div className="top-search-conditions">条件</div>
            <div className="top-search-btn">検索</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
