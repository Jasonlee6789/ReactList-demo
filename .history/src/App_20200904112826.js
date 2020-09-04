import React from "react";
import List from "./list";
// import Data from "./data";
import datas from "./data";

class App extends React.Component {
  state = {
    openName: "family", //Save state from decide which itemList to expand
    //如果没有展开细节，openName为空
  };

  setOpenName = (openName) => {
    this.setState({
      openName,
    });
  };
  render() {
    console.log(Object.keys(datas));
    return (
      <div className="friend-list">
        {Object.keys(datas).map((item, index) => {
          return (
            <List
              key={index}
              name={item}
              openName={this.state.openName}
              itemData={datas[item]}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
