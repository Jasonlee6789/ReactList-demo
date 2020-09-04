import React from "react";

export default class List extends React.Component {
  // state = {
  //   show: true,
  // };

  render() {
    let { show } = this.state;
    console.log(this.state);
    let { itemData } = this.props;
    let { name, children } = itemData;
    return (
      <div className="friend-list">
        {/* <dl className={`friend-group ${show ? "expanded " : ""}`}> */}
        <dl className={"friend-group expanded "}>
          <dt
          // onClick={() => {
          //   this.setState({
          //     show: !show,
          //   });
          // }}
          >
            {name}
          </dt>
          {children.map((item, index) => {
            return <dd key={index}>{item.name}</dd>;
          })}
        </dl>
      </div>
    );
  }
}
