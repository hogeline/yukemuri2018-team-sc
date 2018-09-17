import React, { Component } from "react";
import "./Top.css";

class Top extends Component {
  render() {
    return (
      <div className="top">
        <div className="top-landing">
          <div className="top-landing-logo">rankedtail</div>
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
                  <input type="radio" id="label-beginner" name="level" value="beginner"/><label for="label-beginner">ビギナー</label>
                  <input type="radio" id="label-normal" name="level" value="normal"/><label for="label-normal">ノーマル</label>
                  <input type="radio" id="label-expert" name="level" value="expert"/><label for="label-expert">エキスパート</label>
                </div>
                <br/>
                絞り込みタグ<br/>
                <div className="top-search-tags">     
                  <div><input type="radio" name="tag" id="label-CakePHP" value="CakePHP"/><label for="label-CakePHP">CakePHP</label></div>
                  <div><input type="radio" name="tag" id="label-Laravel" value="Laravel"/><label for="label-Laravel">Laravel </label></div>
                  <div><input type="radio" name="tag" id="label-Perl" value="Perl"/><label for="label-Perl">Perl</label></div>
                  <div><input type="radio" name="tag" id="label-AngularJS" value="AngularJS"/><label for="label-AngularJS">AngularJS</label></div>
                  <div><input type="radio" name="tag" id="label-Oracle" value="Oracle"/><label for="label-Oracle">Oracle</label></div>
                  <div><input type="radio" name="tag" id="label-Eclipse" value="Eclipse"/><label for="label-Eclipse">Eclipse</label></div>
                  <div><input type="radio" name="tag" id="label-Apache" value="Apache"/><label for="label-Apache">Apache</label></div>
                  <div><input type="radio" name="tag" id="label-CentOS" value="CentOS"/><label for="label-CentOS">CentOS</label></div>
                  <div><input type="radio" name="tag" id="label-Struts" value="Struts"/><label for="label-Struts">Struts</label></div>
                  <div><input type="radio" name="tag" id="label-Vim" value="Vim"/><label for="label-Vim">Vim</label></div>
                  <div><input type="radio" name="tag" id="label-Python" value="Python"/><label for="label-Python">Python</label></div>
                  <div><input type="radio" name="tag" id="label-Swift" value="Swift"/><label for="label-Swift">Swift</label></div>
                  <div><input type="radio" name="tag" id="label-CSS3" value="CSS3"/><label for="label-CSS3">CSS3</label></div>
                  <div><input type="radio" name="tag" id="label-nginx" value="nginx"/><label for="label-nginx">nginx</label></div>
                  <div><input type="radio" name="tag" id="label-Linux" value="Linux"/><label for="label-Linux">Linux</label></div>
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
