import React, { Component } from "react";

import "./Header.css"

class Header extends Component {
  render(){
    return(
      <header className="header">
        <div className="title">rankedtail</div>
        <div className="search-select">
          <div className="tag">条件</div>
          質問レベル<br/>
                <div className="top-search-levels">
                  <input type="radio" name="level" value="beginner" checked="checked"/>ビギナー
                  <input type="radio" name="level" value="normal"/>ノーマル
                  <input type="radio" name="level" value="expert"/>エキスパート
                </div>
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
        </div>
      </header>
    )
  }
}

export default Header;
