import React from "react";
import List from "./list";
import Data from "./data";

class App extends React.Component {
  render() {
    return (
      <div className="friend-list">
        {Data.map((item, index) => {
          return <List key={index} Data={item} />;
        })}
      </div>
    );
  }
}

export default App;
