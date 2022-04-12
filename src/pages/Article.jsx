import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";

import {
  getPost,
  createPost,
  editPost,
  deletePost,
} from "../redux/action/postAction";

export default function Article() {
  const dispatch = useDispatch();

  const { isLoading, data: post } = useSelector((state) => state.post);

  const initState = {
    title: "",
    content: "",
  };

  const [form, setform] = useState(initState);

  const handleChange = (e) => {
    const name = e.target.name;
    const target = e.target.value;

    setform({
      ...form,
      [name]: target,
    });
  };

  const handleEdit = (id, items) => {
    dispatch(getPost(id));
    // console.log(id, items, "id, items");
    setform({
      ...form,
      id: id,
      title: items.title,
      content: items.content,
    });
  };

  const handleSubmit = (e) => {
    if (form.id) {
      dispatch(editPost(form.id, form));
    } else {
      dispatch(createPost(form));
    }
    setform(initState);
  };

  useEffect(() => {
    dispatch(getPost());
  }, []);

  console.log(post, "post");
  return (
    <div className="mx-auto">
      <div className=" flex py-10 bg-blue-600 ">
        <div className="container justify-center items-center">
          <h1 className=" text-2xl text-white text-center font-bold">
            Article
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid px-10 gap-y-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          post?.map((item) => (
            <div
              className="rounded-lg w-full shadow-lg bg-slate-100 p-10"
              key={item.id}
            >
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p>{item.content}</p>
              <div className="space-x-2 space-y-4">
                <button
                  className="px-4 py-1 bg-blue-500 rounded-lg text-white"
                  onClick={() => {
                    handleEdit(item.id, item);
                  }}
                >
                  edit
                </button>
                <button
                  className="px-4 py-1 bg-red-500 rounded-lg text-white"
                  onClick={() => dispatch(deletePost(item.id))}
                >
                  delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="bg-blue-200">
        <div className="container mx-auto px-10 py-10 mt-10 ">
          <div className="max-w-lg flex flex-col mx-auto space-y-3">
            <input
              type="text"
              name="title"
              className="border border-blue-500 p-2 rounded-lg"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <input
              type="text"
              name="content"
              className="border border-blue-500 p-2 rounded-lg"
              value={form.content}
              onChange={handleChange}
              placeholder="Content"
            />
            <button
              type="button"
              className="px-4 py-1 bg-blue-500 rounded-lg text-white"
              onClick={() => {
                handleSubmit();
              }}
            >
              {form.id ? "Edit" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
