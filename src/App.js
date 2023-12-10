import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function App() {
  const [state] = useState({
    robots: robots,
    searchfield: "",
  });

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={state.robots} />
    </div>
  );
}
