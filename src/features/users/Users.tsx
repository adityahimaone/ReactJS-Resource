import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUsers } from "./usersSlice";

function Users(): JSX.Element {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);

  const { loading, data, error } = users;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(data);
  return (
    <div className="rounded-lg shadow-lg p-4">
      <div>
        <h1 className="text-center text-lg font-medium text-blue-500 border-b-2 border-blue-300">
          List User
        </h1>
      </div>
      <div>{loading ? <div>Loading...</div> : null}</div>
      <div>{error ? <div>{error}</div> : null}</div>
      <div className="mt-5 space-y-2">
        {!loading &&
          data &&
          data.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>
    </div>
  );
}

export default Users;
