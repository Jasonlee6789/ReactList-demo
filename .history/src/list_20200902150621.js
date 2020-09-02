import React from "react";

export default class List extends React.Component {
  render() {
    return (
      <div className="friend-list">
        <dl className="friend-group expanded">
          <dt>家人</dt>
          <dd>爸爸</dd>
          <dd>妈妈</dd>
        </dl>
      </div>
    );
  }
}
