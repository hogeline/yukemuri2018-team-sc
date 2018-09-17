import React, { Component } from "react";

import "./Header.css"

class Header extends Component {
  render(){
    return(
      <header className="header">
        <div className="title">rankedtail</div>
        <div className="search-select">
          <div className="tag">条件</div>
            <div>
              質問レベル<br/>
                <div className="header-search-levels">
                  <input type="radio" id="label-beginner" name="level" value="beginner"/><label for="label-beginner">ビギナー</label>
                  <input type="radio" id="label-normal" name="level" value="normal"/><label for="label-normal">ノーマル</label>
                  <input type="radio" id="label-expert" name="level" value="expert"/><label for="label-expert">エキスパート</label>
                </div>
              </div>
              絞り込みタグ<br/>
              <div className="header-search-tags">          
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
        </div>
        <div className="re-search-btn">再検索</div>
      </header>
    )
  }
}

export default Header;
