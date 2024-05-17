import React, { useContext } from "react";
import { PostsContext2 } from "../context/PostsContext2";
import { CommentsContext2 } from "../context/CommentsContext2";
import CommentForm2 from "../components/CommentForm2";

const Category2 = () => {
  const { posts } = useContext(PostsContext2);
  const { comments, addComment } = useContext(CommentsContext2);

  return (
    <div className="flex flex-col items-center justify-center w-full pt-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-500">Blog posts</h1>
      {posts &&
        posts.map((post) => (
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
            <CommentForm2 postId={post.id} addComment={addComment} />
          </div>
        ))}
    </div>
  );
};

export default Category2;
