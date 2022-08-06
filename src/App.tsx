import React from "react";
import Counter from "./features/counter/Counter";
import Users from "./features/users/Users";

function App(): JSX.Element {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Users />
    </div>
  );
}

export default App;
