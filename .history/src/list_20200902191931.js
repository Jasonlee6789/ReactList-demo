import React from "react";

export default class List extends React.Component {
  state = {
    show: false,
  };

  render() {
    let { show } = this.state;
    console.log(this.props);
    let { itemData } = this.props;
    let { name, children } = itemData;
    return (
      <div className="friend-list">
        <dl className="friend-group"{show ?  "expanded" : ""}>
          <dt>{name}</dt>
          {children.map((item, index) => {
            return <dd key={index}>{item.name}</dd>;
          })}
        </dl>
      </div>
    );
  }
}
