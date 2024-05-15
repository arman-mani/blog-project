import React, { createContext, useState } from "react";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const addComment = (postId, text) => {
    const newComment = { id: Date.now(), postId, username: "John Doe", text };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};
