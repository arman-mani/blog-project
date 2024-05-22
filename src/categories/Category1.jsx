import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { CommentsContext } from "../context/CommentsContext";
import CommentForm from "../components/CommentForm";

const Category1 = () => {
  const { posts } = useContext(PostsContext);
  const { comments } = useContext(CommentsContext);

  const filteredPosts = posts.filter((post) => post.category === "Category1");

  return (
    <div className="flex flex-col items-center justify-center w-full pt-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-500">Blog posts</h1>
      {filteredPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white text-black rounded-lg shadow-md mx-auto max-w-xl w-full mb-8"
        >
          <div className="bg-blue-400 px-6 py-4 rounded-t-lg">
            <h2 className="text-xl font-bold text-white">{post.title}</h2>
            <h3 className="text-sm text-white">By {post.author}</h3>
          </div>
          <div className="p-6">
            <p className="mt-2">{post.text}</p>
            <div className="mt-4">
              <h4 className="text-lg font-bold">Comments</h4>
              <ul>
                {comments
                  .filter((comment) => comment.postId === post.id)
                  .map((comment) => (
                    <li key={comment.id} className="mt-2">
                      <strong>{comment.username}:</strong> {comment.text}
                    </li>
                  ))}
              </ul>
            </div>
            <CommentForm postId={post.id} category="Category1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category1;
