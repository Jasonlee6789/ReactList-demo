import React from "react";
import List from "./list";
import Data from "./data";
// import datas from "./data";

class App extends React.Component {
  state = {
    openName: "", //判断当前哪一项展开
  };

  render() {
    console.log(Object.keys(Data));
    return (
      <div className="friend-list">
        {Data.map((item, index) => {
          return <List key={index} itemData={item} />;
        })}
      </div>
    );
  }
}

export default App;
