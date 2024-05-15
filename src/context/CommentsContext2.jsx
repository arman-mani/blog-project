import React, { createContext, useState } from "react";

export const CommentsContext2 = createContext();

export const CommentsProvider2 = ({ children }) => {
  const [comments, setComments] = useState([]);

  const addComment = (postId, text) => {
    const newComment = { id: Date.now(), postId, username: "John Doe", text };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <CommentsContext2.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext2.Provider>
  );
};
