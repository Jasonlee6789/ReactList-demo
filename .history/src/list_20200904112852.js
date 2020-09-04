import React from "react";

export default class List extends React.Component {
  // state = {
  //   show: true,
  // };

  render() {
    // let { show } = this.state;
    // console.log(this.state);
    console.log(this.props);
    let { itemData, name, openName, setOpenName } = this.props;
    // let { name, children } = itemData;
    let { title, list } = itemData;

    return (
      <div className="friend-list">
        {/* <dl className={`friend-group ${show ? "expanded " : ""}`}> */}
        <dl className={`friend-group ${name === openName ? "expanded" : ""} `}>
          <dt
            onClick={() => {
              // this.setState({
              //   show: !show,
              // });
            }}
          >
            {title}
          </dt>
          {list.map((item, index) => {
            return <dd key={index}>{item.name}</dd>;
          })}
        </dl>
      </div>
    );
  }
}
