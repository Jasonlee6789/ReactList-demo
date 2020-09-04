import React from "react";
import List from "./list";
// import Data from "./data";
import datas from "./data";

class App extends React.Component {
  state = {
    openName: "", //Save state from decide which itemList to expand
    //如果没有展开细节，openName为空
  };

  render() {
    console.log(Object.keys(Data));
    return (
      <div className="friend-list">
        {Data.map((item, index) => {
          return (
            <List
              key={index}
              name={item}
              openName={this.state.openName}
              itemData={item}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
