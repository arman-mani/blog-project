import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { CommentsContext } from "../context/CommentsContext";
import CommentForm from "../components/CommentForm";

const Category1 = () => {
  const { posts } = useContext(PostsContext);
  const { comments, addComment } = useContext(CommentsContext);

  return (
    <div className="flex flex-col items-center justify-center w-full pt-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Blog posts</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white text-black rounded-lg shadow-md p-6 mx-auto max-w-xl w-full mb-8"
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <h3 className="text-sm">By {post.author}</h3>
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
          <CommentForm postId={post.id} addComment={addComment} />
        </div>
      ))}
    </div>
  );
};

export default Category1;
