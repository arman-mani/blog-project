import React, { useState, useContext } from "react";
import { CommentsContext } from "../context/CommentsContext";

const CommentForm = ({ postId, category }) => {
  const [text, setText] = useState("");
  const { addComment } = useContext(CommentsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, text, category);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
