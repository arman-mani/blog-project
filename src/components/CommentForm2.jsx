// src/components/CommentForm2.jsx
import React, { useState } from "react";

const CommentForm2 = ({ postId, addComment }) => {
  const [newCommentText, setNewCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, newCommentText);
    setNewCommentText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
        placeholder="Add a comment"
        className="text-black px-2 py-1 h-8 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-3 py-2 bg-black text-white rounded hover:bg-gray-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm2;
