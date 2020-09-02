import React from "react";
import List from "./list";
import "./css/index.css";
class App extends React.Component {
  render() {
    return (
      <div class="friend-list">
        <List />
        <List />
        <List />
      </div>
    );
  }
}

export default App;
