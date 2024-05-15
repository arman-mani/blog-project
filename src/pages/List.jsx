import React from "react";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";

const List = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold my-5 border-b border-gray-300 pb-2 text-center text-blue-500">
        All Posts
      </h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-300 pb-2">
          Category 1 Posts
        </h2>
        <div className="mb-4">
          <PostsComponent category="Category1" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-300 pb-2">
          Comments
        </h2>
        <div className="mb-4">
          <CommentsComponent category="Category1" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-300 pb-2">
          Category 2 Posts
        </h2>
        <div className="mb-4">
          <PostsComponent category="Category2" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-300 pb-2">
          Comments
        </h2>
        <div className="mb-4">
          <CommentsComponent category="Category2" />
        </div>
      </div>
    </div>
  );
};

export default List;
