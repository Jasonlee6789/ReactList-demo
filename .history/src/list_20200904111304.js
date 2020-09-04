import React from "react";

export default class List extends React.Component {
  // state = {
  //   show: true,
  // };

  render() {
    // let { show } = this.state;
    // console.log(this.state);
    console.log(this.props);
    let { itemData, name, openName } = this.props;
    let { title, children } = itemData;
    return (
      
        /* <dl className={`friend-group ${show ? "expanded " : ""}`}> */}
        <dl className={`friend-group ${name===openName?"expanded":"" }`}>
          <dt
            onClick={() => {
              // this.setState({
              //   show: !show,
              // });
            }}
          >
            {title}
          </dt>
          {children.map((item, index) => {
            return <dd key={index}>{item.name}</dd>;
          })}
        </dl>
      
    );
  }
}
