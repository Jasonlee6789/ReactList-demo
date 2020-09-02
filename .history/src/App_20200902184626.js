import React from "react";
import List from "./list";
import Dta from "./data";

class App extends React.Component {
  render() {
    return (
      <div className="friend-list">
        <List />
        <List />
        <List />
      </div>
    );
  }
}

export default App;
