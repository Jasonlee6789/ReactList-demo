import React from "react";

class App extends React.Component {
  render() {
    return (
      <div class="friend-list">
        <dl class="friend-group expanded">
          <dt>家人</dt>
          <dd>爸爸</dd>
          <dd>妈妈</dd>
        </dl>
        <dl class="friend-group">
          <dt>朋友</dt>
          <dd>张三</dd>
          <dd>李四</dd>
          <dd>王五</dd>
        </dl>
        <dl class="friend-group">
          <dt>客户</dt>
          <dd>阿里</dd>
          <dd>腾讯</dd>
          <dd>头条</dd>
        </dl>
      </div>
    );
  }
}

export default App;
