import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchPosts, deletePost } from "./postSlice";
import PostCreate from "./PostCreate";

function Posts(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  const { loading, data, error } = posts;

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePostByID = (id: number): void => {
    dispatch(deletePost(id));
  };

  return (
    <div className="rounded-lg shadow-lg p-4">
      <div>
        <h1 className="text-center text-lg font-medium text-blue-500 border-b-2 border-blue-300">
          List Posts
        </h1>
      </div>
      <div>
        <PostCreate />
      </div>
      <div>{loading ? <div>Loading...</div> : null}</div>
      <div>{error ? <div>{error}</div> : null}</div>
      <div className="mt-5 space-y-2">
        {!loading &&
          data &&
          data.map((post) => (
            <div
              key={post.id}
              className="bg-slate-100 p-2 rounded-lg hover:scale-105 transition-all"
            >
              <div>
                <h2 className="text-md font-medium">{post.title}</h2>
              </div>
              <div>
                <p className="text-sm">{post.body}</p>
              </div>
              <div className="flex justify-around space-x-2 mt-3">
                <button
                  type="button"
                  onClick={() => deletePostByID(post.id)}
                  className="bg-red-400 text-white w-full py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="bg-blue-400 text-white w-full py-1 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Posts;
