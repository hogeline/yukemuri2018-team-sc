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
              スキルレベルに合った<span>質問を探す</span>
            </h1>
          </div>
          <div className="top-landing-source">
            <div className="top-landing-detail">
              rankedtailはご希望の質問を<span className="top-landing-detail-Emph1">的確に抽出し、</span>
              <br/>あなたのスキルアップに<span className="top-landing-detail-Emph2">貢献します。</span>
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
                質問レベル<br/>
                <div className="top-search-levels">
                  <input type="radio" name="level" value="beginner" checked="checked"/>ビギナー
                  <input type="radio" name="level" value="normal"/>ノーマル
                  <input type="radio" name="level" value="expert"/>エキスパート
                </div>
                <br/>
                絞り込みタグ<br/>
                <div className="top-search-tags">          
                  <div><input type="radio" name="tag" value="CakePHP" checked="checked"/>CakePHP </div>
                  <div><input type="radio" name="tag" value="Laravel"/>Laravel </div>
                  <div><input type="radio" name="tag" value="Perl"/>Perl</div>
                  <div><input type="radio" name="tag" value="AngularJS"/>AngularJS</div>
                  <div><input type="radio" name="tag" value="Oracle"/>Oracle</div>
                  <div><input type="radio" name="tag" value="Eclipse"/>Eclipse</div>
                  <div><input type="radio" name="tag" value="Apache"/>Apache</div>
                  <div><input type="radio" name="tag" value="CentOS"/>CentOS</div>
                  <div><input type="radio" name="tag" value="Struts"/>Struts</div>
                  <div><input type="radio" name="tag" value="Vim"/>Vim</div>
                  <div><input type="radio" name="tag" value="Python"/>Python</div>
                  <div><input type="radio" name="tag" value="Swift"/>Swift</div>
                  <div><input type="radio" name="tag" value="CSS3"/>CSS3</div>
                  <div><input type="radio" name="tag" value="nginx"/>nginx</div>
                  <div><input type="radio" name="tag" value="Linux"/>Linux</div>
                </div>
              </form>
            </div>
            <div className="top-search-btn">検索</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
