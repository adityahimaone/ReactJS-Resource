import React, { useState } from "react";
import Counter from "./features/counter/Counter";
import Users from "./features/users/Users";
import Posts from "./features/post/Posts";

function App(): JSX.Element {
  const [changeMenu, setChangeMenu] = useState(0);

  const handleChangeMenu = (index: number) => {
    setChangeMenu(index);
  };

  return (
    <div className="App">
      {/* <Counter /> */}
      <div className="container mx-auto max-w-md py-10 px-5">
        <div>
          <h1>My APP</h1>
        </div>
        <div className="flex justify-around rounded-lg my-2 p-1 bg-slate-300 space-x-2">
          <button
            type="button"
            className="bg-slate-400 focus:bg-blue-600 text-white w-full py-2 rounded-md hover:bg-slate-400"
            onClick={() => handleChangeMenu(0)}
          >
            Users
          </button>
          <button
            type="button"
            className="bg-slate-400 focus:bg-blue-600 text-white w-full py-2 rounded-md hover:bg-slate-400"
            onClick={() => handleChangeMenu(1)}
          >
            Posts
          </button>
        </div>
        {changeMenu === 0 && <Users />}
        {changeMenu === 1 && <Posts />}
      </div>
    </div>
  );
}

export default App;
