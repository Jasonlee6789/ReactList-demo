import React from "react";

export default class List extends React.Component {
  state = {
    show: true,
  };

  render() {
    let { show } = this.state;
    console.log(this.state);
    let { itemData } = this.props;
    let { name, children } = itemData;
    return (
      <div className="friend-list">
        <dl>
          <dt
            className="friend-group expanded"
            onClick={() => {
              this.setState({
                show: !show,
              });
            }}
          >
            {name}
            {children.map((item, index) => {
              return (
                <dd
                  key={index}
                  className={show ? "friend-group expanded dd" : ""}
                >
                  {item.name}
                </dd>
              );
            })}
          </dt>
        </dl>
      </div>
    );
  }
}
