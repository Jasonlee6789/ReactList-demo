import React from "react";

export default class List extends React.Component {
  render() {
    console.log(this.props);
    let { itemData } = this.props;
    let { name, children } = itemdata;
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
