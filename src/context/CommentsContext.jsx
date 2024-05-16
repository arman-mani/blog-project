import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const addComment = (postId, text) => {
    const username = currentUser
      ? currentUser.displayName || currentUser.email
      : "Anonymous";
    const newComment = { id: Date.now(), postId, username, text };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};
