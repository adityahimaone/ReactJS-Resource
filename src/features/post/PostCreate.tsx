import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { createPost, addPost } from "./postSlice";

function PostCreate(): JSX.Element {
  const dispatch = useAppDispatch();

  interface Post {
    userId: number;
    title: string;
    body: string;
  }

  const initialValue: Post = {
    userId: 1,
    title: "",
    body: "",
  };

  const [newPost, setNewPost] = useState<Post>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addPost(newPost));
    setNewPost(initialValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            className="rounded-md border py-1"
            name="title"
            id="titleInput"
            value={newPost.title}
            onChange={handleChange}
          />
          <input
            type="text"
            className="rounded-md border py-1"
            name="body"
            id="bodyInput"
            value={newPost.body}
            onChange={handleChange}
          />
          <button
            type="submit"
            className=" bg-green-400 text-white  py-1 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default PostCreate;
