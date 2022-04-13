import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ArticleDetail() {
  const { isLoading, data: post } = useSelector((state) => state.postByID);
  return (
    <div className="container mx-auto px-10 space-y-3 min-h-screen">
      <div className="text-xl font-bold">ArticleDetail</div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="p-5 bg-slate-100 rounded-lg">
            <div className="text-lg">{post.title}</div>
            <div>{post.content}</div>
          </div>
        )}
      </div>
      <div className="m4-2">
        <Link
          to="/article"
          className="px-4 py-1.5 bg-red-500 rounded-lg text-white"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
