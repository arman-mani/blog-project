import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext"; //

export const CommentsContext2 = createContext();

export const CommentsProvider2 = ({ children }) => {
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
    <CommentsContext2.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext2.Provider>
  );
};
